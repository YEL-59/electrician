'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Star, Phone, Mail, MapPin, MessageCircle, Heart, Globe, Share2 } from 'lucide-react';
import Link from 'next/link';
import { Checkbox } from '@/components/ui/checkbox';
import MapComponent from '@/components/search/MapComponent';

export default function ProfileContent({ provider }) {
    // State for review modal
    const [showReviewModal, setShowReviewModal] = useState(false);
    const [rating, setRating] = useState(0);
    const [hoveredRating, setHoveredRating] = useState(0);

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Hero Header */}
            <div className="bg-[#F9F1F0] p-6 rounded-lg mb-8 relative">
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-2xl font-bold">{provider.name}</h1>
                        <p className="text-gray-600">{provider.location}</p>
                        <p className="text-sm text-gray-500 mt-4 max-w-2xl">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like
                            <span className="ml-1 text-blue-600 cursor-pointer">Read more</span>
                        </p>
                    </div>
                    <div className="flex space-x-2">
                        <Button variant="outline" size="icon" className="rounded-full">
                            <Heart className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="icon" className="rounded-full">
                            <Share2 className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
                <div className="flex mt-6 space-x-4">
                    <Button className="bg-blue-600 hover:bg-blue-700">
                        <Phone className="mr-2 h-4 w-4" /> Call Now
                    </Button>
                    <Button variant="outline">
                        <Mail className="mr-2 h-4 w-4" /> Send Email
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-8">
                    {/* Contact Us Section */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Contact Us</CardTitle>
                            <p className="text-sm text-gray-500">We are here for you 24/7</p>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                <div className="text-center">
                                    <div className="bg-gray-100 p-3 rounded-lg inline-block mb-2">
                                        <Globe className="h-5 w-5 text-blue-600" />
                                    </div>
                                    <p className="text-sm font-medium">Website</p>
                                    <p className="text-xs text-gray-500">{provider.contact?.website || 'website.com'}</p>
                                </div>
                                <div className="text-center">
                                    <div className="bg-gray-100 p-3 rounded-lg inline-block mb-2">
                                        <Mail className="h-5 w-5 text-blue-600" />
                                    </div>
                                    <p className="text-sm font-medium">Email</p>
                                    <p className="text-xs text-gray-500">{provider.contact?.email || 'info@example.com'}</p>
                                </div>
                                <div className="text-center">
                                    <div className="bg-gray-100 p-3 rounded-lg inline-block mb-2">
                                        <Phone className="h-5 w-5 text-blue-600" />
                                    </div>
                                    <p className="text-sm font-medium">Phone</p>
                                    <p className="text-xs text-gray-500">{provider.contact?.phone || '+1 234 567 890'}</p>
                                </div>
                                <div className="text-center">
                                    <div className="bg-gray-100 p-3 rounded-lg inline-block mb-2">
                                        <MapPin className="h-5 w-5 text-blue-600" />
                                    </div>
                                    <p className="text-sm font-medium">Address</p>
                                    <p className="text-xs text-gray-500">{provider.contact?.address || '123 Main St'}</p>
                                </div>
                            </div>
                            
                            {/* Map */}
                            <div className="h-64 bg-gray-100 rounded-lg overflow-hidden">
                                <MapComponent providers={[provider]} />
                            </div>
                        </CardContent>
                    </Card>

                    {/* Reviews Section */}
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                            <CardTitle>Reviews</CardTitle>
                            <div className="flex items-center">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                        key={star}
                                        className={`h-4 w-4 ${star <= (provider.rating || 4.5) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                                    />
                                ))}
                                <span className="ml-2 text-sm text-gray-600">{provider.rating || 4.5}</span>
                            </div>
                        </CardHeader>
                        <CardContent>
                            {(provider.reviews || []).map((review, index) => (
                                <div key={index} className="border-b pb-4 mb-4 last:border-0 last:pb-0 last:mb-0">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 bg-gray-200 rounded-full mr-3 flex items-center justify-center">
                                                <span className="text-sm">{review.name?.charAt(0) || 'A'}</span>
                                            </div>
                                            <div>
                                                <p className="font-medium">{review.name || 'Adam Smith'}</p>
                                                <div className="flex">
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <Star
                                                            key={star}
                                                            className={`h-3 w-3 ${star <= (review.rating || 5) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <span className="text-xs text-gray-500">{review.date || '01 September, 2023'}</span>
                                    </div>
                                    <p className="text-sm text-gray-600">{review.comment || 'I recently purchased and I am thrilled with the performance, ease of use, and reliability.'}</p>
                                    <div className="flex items-center mt-2">
                                        <Button variant="ghost" size="sm" className="h-8 px-2">
                                            <Heart className="h-4 w-4 mr-1" />
                                            <span className="text-xs">{review.likes || 0}</span>
                                        </Button>
                                        <Button variant="ghost" size="sm" className="h-8 px-2">
                                            <MessageCircle className="h-4 w-4 mr-1" />
                                            <span className="text-xs">{review.comments || 0}</span>
                                        </Button>
                                    </div>
                                </div>
                            ))}
                            
                            <Button 
                                className="w-full mt-4" 
                                variant="outline"
                                onClick={() => setShowReviewModal(true)}
                            >
                                Add a review
                            </Button>
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-8">
                    {/* Organization Status */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Organization Status</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-500">Founded</span>
                                    <span className="text-sm font-medium">{provider.organization?.founded || '2008'}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-500">Industry</span>
                                    <span className="text-sm font-medium">{provider.organization?.industry || 'Construction'}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-500">Tax ID</span>
                                    <span className="text-sm font-medium">{provider.organization?.taxId || '23478234008'}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-500">Members</span>
                                    <span className="text-sm font-medium">{provider.organization?.members || '50+'}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-sm text-gray-500">Reviews</span>
                                    <span className="text-sm font-medium">{provider.organization?.reviews || '15+'}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-gray-500">Ratings</span>
                                    <div className="flex items-center">
                                        <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                        <span className="ml-1 text-sm font-medium">{provider.organization?.ratings || '4.5'}</span>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Query Form */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Query</CardTitle>
                            <p className="text-sm text-gray-500">Our friendly team would love to hear from you.</p>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-sm font-medium">Name</label>
                                        <Input placeholder="First name" />
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium">Mobile No.</label>
                                        <Input placeholder="Mobile no." />
                                    </div>
                                </div>
                                <div>
                                    <label className="text-sm font-medium">Company Email</label>
                                    <Input placeholder="example@company.com" />
                                </div>
                                <div>
                                    <label className="text-sm font-medium">Phone number</label>
                                    <Input placeholder="+1 (555) 000-0000" />
                                </div>
                                <div>
                                    <label className="text-sm font-medium">Message</label>
                                    <Textarea placeholder="Your message here..." className="min-h-[100px]" />
                                </div>
                                <div className="flex items-start space-x-2">
                                    <Checkbox id="privacy" />
                                    <label htmlFor="privacy" className="text-xs text-gray-500">
                                        I give Tofayel permission to contact me in response to this enquiry. I have read and agree to the <span className="text-blue-600">privacy policy</span>.
                                    </label>
                                </div>
                                <Button className="w-full">Send</Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* You may also be interested in */}
            <div className="mt-12">
                <h2 className="text-xl font-bold mb-6">You may also be interested in</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[1, 2, 3].map((item) => (
                        <Card key={item} className="overflow-hidden">
                            <div className="h-40 bg-gray-200"></div>
                            <CardContent className="p-4">
                                <h3 className="font-bold mb-2">Falcon Electric</h3>
                                <div className="flex items-center mb-2">
                                    <div className="flex">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star
                                                key={star}
                                                className={`h-3 w-3 ${star <= 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-xs text-gray-500 ml-2">(120)</span>
                                </div>
                                <div className="flex justify-between mt-4">
                                    <Button variant="outline" size="sm">
                                        <Phone className="h-3 w-3 mr-1" /> Call
                                    </Button>
                                    <Button size="sm">
                                        View
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Review Modal */}
            {showReviewModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg w-full max-w-md">
                        <h2 className="text-xl font-bold mb-4">Add a Review</h2>
                        <div className="mb-4">
                            <p className="text-sm mb-2">Rating</p>
                            <div className="flex">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                        key={star}
                                        className={`h-6 w-6 cursor-pointer ${
                                            star <= (hoveredRating || rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                                        }`}
                                        onClick={() => setRating(star)}
                                        onMouseEnter={() => setHoveredRating(star)}
                                        onMouseLeave={() => setHoveredRating(0)}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="text-sm font-medium">Your Review</label>
                            <Textarea placeholder="Write your review here..." className="min-h-[100px]" />
                        </div>
                        <div className="flex justify-end space-x-2">
                            <Button variant="outline" onClick={() => setShowReviewModal(false)}>
                                Cancel
                            </Button>
                            <Button onClick={() => setShowReviewModal(false)}>
                                Submit
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}