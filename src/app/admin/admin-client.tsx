"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Upload, Trash2, Plus, X } from "lucide-react";
import { Memory, GhatCard } from "@/lib/types";
import { Product } from "@/lib/products";

// A simple, hardcoded password for now.
const ADMIN_PASSWORD = "Feb25@2026";

interface AdminClientProps {
  memories: Memory[];
  ghats?: GhatCard[];
  products?: Product[];
}

export function AdminClient({ memories, ghats = [], products = [] }: AdminClientProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState<"memories" | "ghats" | "products">("memories");
  const router = useRouter();

  // Upload State - Memories
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [sentence, setSentence] = useState("");

  // Upload State - Ghats
  const [isGhatUploadOpen, setIsGhatUploadOpen] = useState(false);
  const [ghatUploading, setGhatUploading] = useState(false);
  const [ghatTitle, setGhatTitle] = useState("");
  const [ghatDescriptionEn, setGhatDescriptionEn] = useState("");
  const [ghatDescriptionHi, setGhatDescriptionHi] = useState("");
  const [ghatImages, setGhatImages] = useState<File[]>([]);

  // Upload State - Products
  const [isProductUploadOpen, setIsProductUploadOpen] = useState(false);
  const [productUploading, setProductUploading] = useState(false);
  const [productTitle, setProductTitle] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState<File | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Incorrect password.");
    }
  };

  // Memory Upload Handlers
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFile || !sentence) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("image", selectedFile);
    formData.append("sentence", sentence);

    try {
      const response = await fetch("/api/memories", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setIsUploadOpen(false);
        setSelectedFile(null);
        setSentence("");
        router.refresh();
      } else {
        console.error("Upload failed");
      }
    } catch (error) {
      console.error("Error uploading:", error);
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this memory?")) return;

    try {
      const response = await fetch("/api/memories", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        router.refresh();
      } else {
        console.error("Failed to delete memory");
      }
    } catch (error) {
      console.error("Error deleting memory:", error);
    }
  };

  // Ghat Upload Handlers
  const handleGhatFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setGhatImages(Array.from(e.target.files).slice(0, 4));
    }
  };

  const removeGhatImage = (index: number) => {
    setGhatImages(ghatImages.filter((_, i) => i !== index));
  };

  const handleGhatUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!ghatTitle || !ghatDescriptionEn || !ghatDescriptionHi || ghatImages.length === 0) {
      alert("Please fill in all fields and select at least one image");
      return;
    }

    setGhatUploading(true);
    const formData = new FormData();
    formData.append("title", ghatTitle);
    formData.append("descriptionEn", ghatDescriptionEn);
    formData.append("descriptionHi", ghatDescriptionHi);
    ghatImages.forEach((file) => {
      formData.append("images", file);
    });

    try {
      const response = await fetch("/api/ghats", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setIsGhatUploadOpen(false);
        setGhatTitle("");
        setGhatDescriptionEn("");
        setGhatDescriptionHi("");
        setGhatImages([]);
        router.refresh();
      } else {
        console.error("Upload failed");
        alert("Upload failed");
      }
    } catch (error) {
      console.error("Error uploading:", error);
      alert("Error uploading ghat");
    } finally {
      setGhatUploading(false);
    }
  };

  const handleGhatDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this ghat card?")) return;

    try {
      const response = await fetch("/api/ghats", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        router.refresh();
      } else {
        console.error("Failed to delete ghat");
      }
    } catch (error) {
      console.error("Error deleting ghat:", error);
    }
  };

  // Product Upload Handlers
  const handleProductFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProductImage(e.target.files[0]);
    }
  };

  const handleProductUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!productTitle || !productDescription || !productPrice || !productImage) {
      alert("Please fill in all fields and select an image");
      return;
    }

    setProductUploading(true);
    const formData = new FormData();
    formData.append("title", productTitle);
    formData.append("description", productDescription);
    formData.append("price", productPrice);
    formData.append("image", productImage);

    try {
      const response = await fetch("/api/products", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setIsProductUploadOpen(false);
        setProductTitle("");
        setProductDescription("");
        setProductPrice("");
        setProductImage(null);
        router.refresh();
      } else {
        console.error("Upload failed");
        alert("Upload failed");
      }
    } catch (error) {
      console.error("Error uploading product:", error);
      alert("Error uploading product");
    } finally {
      setProductUploading(false);
    }
  };

  const handleProductDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    try {
      const response = await fetch("/api/products", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      if (response.ok) {
        router.refresh();
      } else {
        console.error("Failed to delete product");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  if (!isLoggedIn) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-4 pt-24">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle>Admin Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <p className="text-sm text-red-600">{error}</p>}
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 p-4 pt-24">
      <div className="container mx-auto">
        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b">
          <button
            onClick={() => setActiveTab("memories")}
            className={`px-6 py-3 font-semibold ${
              activeTab === "memories"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Memories
          </button>
          <button
            onClick={() => setActiveTab("ghats")}
            className={`px-6 py-3 font-semibold ${
              activeTab === "ghats"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Ghats
          </button>
          <button
            onClick={() => setActiveTab("products")}
            className={`px-6 py-3 font-semibold ${
              activeTab === "products"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Products
          </button>
        </div>

        {/* Memories Section */}
        {activeTab === "memories" && (
          <div>
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-4xl font-bold text-gray-800 font-headline">
                Manage Memories
              </h1>

              <Dialog open={isUploadOpen} onOpenChange={setIsUploadOpen}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Memory
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Upload New Memory</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleUpload} className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="image">Image</Label>
                      <Input
                        id="image"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="sentence">Sentence</Label>
                      <Textarea
                        id="sentence"
                        placeholder="Write a heartfelt sentence..."
                        value={sentence}
                        onChange={(e) => setSentence(e.target.value)}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={uploading}>
                      {uploading ? "Uploading..." : "Upload Memory"}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {memories.map((memory) => (
                <div
                  key={memory.id}
                  className="relative group aspect-square rounded-lg overflow-hidden border bg-white shadow-sm"
                >
                  <Image
                    src={memory.src}
                    alt={memory.sentence || "Memory"}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center">
                    <p className="text-white text-xs mb-2 line-clamp-3">
                      {memory.sentence}
                    </p>
                    {memory.isUpload && (
                      <Button
                        variant="destructive"
                        size="icon"
                        onClick={() => handleDelete(memory.id)}
                        title="Delete Memory"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Ghats Section */}
        {activeTab === "ghats" && (
          <div>
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-4xl font-bold text-gray-800 font-headline">
                Manage Ghats
              </h1>

              <Dialog open={isGhatUploadOpen} onOpenChange={setIsGhatUploadOpen}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Ghat
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Upload New Ghat Card</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleGhatUpload} className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="ghat-title">Title</Label>
                      <Input
                        id="ghat-title"
                        placeholder="e.g., Dashashwamedh Ghat"
                        value={ghatTitle}
                        onChange={(e) => setGhatTitle(e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="ghat-images">Images (3-4 recommended)</Label>
                      <Input
                        id="ghat-images"
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleGhatFileChange}
                        required
                      />
                      {ghatImages.length > 0 && (
                        <div className="grid grid-cols-4 gap-2 mt-2">
                          {ghatImages.map((file, index) => (
                            <div key={index} className="relative group aspect-square rounded">
                              <img
                                src={URL.createObjectURL(file)}
                                alt={`Preview ${index + 1}`}
                                className="w-full h-full object-cover rounded"
                              />
                              <button
                                type="button"
                                onClick={() => removeGhatImage(index)}
                                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="ghat-desc-en">Description (English)</Label>
                      <Textarea
                        id="ghat-desc-en"
                        placeholder="Write detailed description in English..."
                        value={ghatDescriptionEn}
                        onChange={(e) => setGhatDescriptionEn(e.target.value)}
                        rows={6}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="ghat-desc-hi">विवरण (Hindi)</Label>
                      <Textarea
                        id="ghat-desc-hi"
                        placeholder="Write detailed description in Hindi..."
                        value={ghatDescriptionHi}
                        onChange={(e) => setGhatDescriptionHi(e.target.value)}
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" disabled={ghatUploading}>
                      {ghatUploading ? "Uploading..." : "Upload Ghat Card"}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ghats.map((ghat) => (
                <div
                  key={ghat.id}
                  className="relative rounded-lg overflow-hidden border bg-white shadow-sm p-4 group hover:shadow-md transition-shadow"
                >
                  <div className="mb-4 aspect-video bg-gray-200 rounded-lg overflow-hidden">
                    <Image
                      src={ghat.images[0]}
                      alt={ghat.title}
                      width={400}
                      height={225}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-xl font-bold mb-2">{ghat.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {ghat.descriptionEn}
                  </p>

                  <div className="flex justify-between items-center pt-4 border-t">
                    <span className="text-xs text-gray-500">
                      {ghat.images.length} images
                    </span>
                    {ghat.isUpload && (
                      <Button
                        variant="destructive"
                        size="icon"
                        onClick={() => handleGhatDelete(ghat.id)}
                        title="Delete Ghat Card"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Products Section */}
        {activeTab === "products" && (
          <div>
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-4xl font-bold text-gray-800 font-headline">
                Manage Products
              </h1>

              <Dialog open={isProductUploadOpen} onOpenChange={setIsProductUploadOpen}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Product
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Upload New Product</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleProductUpload} className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="product-title">Title</Label>
                      <Input
                        id="product-title"
                        placeholder="Product Name"
                        value={productTitle}
                        onChange={(e) => setProductTitle(e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="product-desc">Description</Label>
                      <Textarea
                        id="product-desc"
                        placeholder="Product description..."
                        value={productDescription}
                        onChange={(e) => setProductDescription(e.target.value)}
                        rows={4}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="product-price">Price</Label>
                      <Input
                        id="product-price"
                        type="number"
                        step="0.01"
                        placeholder="0.00"
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="product-image">Product Image</Label>
                      <Input
                        id="product-image"
                        type="file"
                        accept="image/*"
                        onChange={handleProductFileChange}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" disabled={productUploading}>
                      {productUploading ? "Uploading..." : "Upload Product"}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="relative rounded-lg overflow-hidden border bg-white shadow-sm p-4 group hover:shadow-md transition-shadow flex flex-col"
                >
                  <div className="mb-4 relative aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow">
                    {product.description}
                  </p>

                  <div className="flex justify-between items-center pt-4 border-t">
                    <span className="text-lg font-bold text-orange-600">
                      ₹{product.price.toFixed(2)}
                    </span>
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => handleProductDelete(product.id)}
                      title="Delete Product"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
