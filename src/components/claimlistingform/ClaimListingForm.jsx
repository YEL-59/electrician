'use client';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useFieldArray } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card'; // Only for file upload previews if needed, but minimal use
import { Plus, Trash2 } from 'lucide-react'; // For add/remove icons

const formSchema = z.object({
    businessName: z.string().min(1, 'Business name is required'),
    registrationNumber: z.string().min(1, 'Registration number is required'),
    yearOfEstablishment: z.string().min(4, 'Year is required'),
    totalMembers: z.string().min(1, 'Total members is required'),
    phone: z.string().min(1, 'Phone is required'),
    email: z.string().email('Valid email is required'),
    description: z.string().optional(),
    coverPhoto: z.any().optional(),
    serviceCategory: z.string().min(1, 'Category is required'),
    subcategories: z.array(z.string()).optional(),
    pricing: z.array(
        z.object({
            pricingType: z.string().min(1, 'Pricing type is required'),
            amount: z.string().min(1, 'Amount is required'),
        })
    ).min(1, 'At least one pricing entry is required'),
    country: z.string().min(1, 'Country is required'),
    state: z.string().min(1, 'State is required'),
    city: z.string().min(1, 'City is required'),
    zipCode: z.string().min(1, 'ZIP code is required'),
    address: z.string().min(1, 'Address is required'),
    tradeLicense: z.any().optional(),
});

//type FormData = z.infer<typeof formSchema>;

export function ClaimListingForm() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            businessName: 'Falcon Electronics',
            registrationNumber: '12345678',
            yearOfEstablishment: '2010',
            totalMembers: '20 Members',
            phone: '+91-91234567',
            email: 'falcon@gmail.com',
            description: 'Text goes here',
            coverPhoto: '',
            serviceCategory: 'electrician',
            subcategories: ['Electrical Services', 'Commercial Electrician'],
            pricing: [{ pricingType: 'hourly', amount: '50' }],
            country: 'Cameroon',
            state: 'CM',
            city: 'Cameroon',
            zipCode: '2452',
            address: '2/4 House USA',
            tradeLicense: '',
        },
    });

    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: 'pricing',
    });

    function onSubmit(values) {
        console.log(values); // Handle form submission (e.g., API call)
    }

    return (
        <div className="min-h-screen   p-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Claim your listing</h1>
                    <p className="text-gray-600 text-lg">Join thousands of successful service providers on our platform</p>
                </div>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-12">
                        {/* Business Details Section */}
                        <section className="space-y-6">
                            <h2 className="text-xl font-semibold text-gray-800 border-b border-pink-200 pb-2">Business Details</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <FormField
                                    control={form.control}
                                    name="businessName"
                                    render={({ field }) => (
                                        <FormItem className="space-y-2">
                                            <FormLabel className="text-sm font-medium text-gray-700">Business/Company Name</FormLabel>
                                            <FormControl>
                                                <Input className="h-10 border border-gray-300 rounded-md px-3 py-2 focus:border-pink-500" placeholder="Falcon Electronics" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="registrationNumber"
                                    render={({ field }) => (
                                        <FormItem className="space-y-2">
                                            <FormLabel className="text-sm font-medium text-gray-700">Registration Number / TIN</FormLabel>
                                            <FormControl>
                                                <Input className="h-10 border border-gray-300 rounded-md px-3 py-2 focus:border-pink-500" placeholder="12345678" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="yearOfEstablishment"
                                    render={({ field }) => (
                                        <FormItem className="space-y-2">
                                            <FormLabel className="text-sm font-medium text-gray-700">Year of Establishment</FormLabel>
                                            <FormControl>
                                                <Input type="number" className="h-10 border border-gray-300 rounded-md px-3 py-2 focus:border-pink-500" placeholder="2010" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="totalMembers"
                                    render={({ field }) => (
                                        <FormItem className="space-y-2">
                                            <FormLabel className="text-sm font-medium text-gray-700">Total Members</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger className="h-10 border border-gray-300 rounded-md px-3 py-2 focus:border-pink-500">
                                                        <SelectValue placeholder="20 Members" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="20 Members">20 Members</SelectItem>
                                                    <SelectItem value="50 Members">50 Members</SelectItem>
                                                    <SelectItem value="100 Members">100 Members</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="phone"
                                    render={({ field }) => (
                                        <FormItem className="space-y-2">
                                            <FormLabel className="text-sm font-medium text-gray-700">Phone</FormLabel>
                                            <FormControl>
                                                <Input className="h-10 border border-gray-300 rounded-md px-3 py-2 focus:border-pink-500" placeholder="+91-91234567" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem className="space-y-2">
                                            <FormLabel className="text-sm font-medium text-gray-700">Email</FormLabel>
                                            <FormControl>
                                                <Input className="h-10 border border-gray-300 rounded-md px-3 py-2 focus:border-pink-500" placeholder="falcon@gmail.com" type="email" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="description"
                                    render={({ field }) => (
                                        <FormItem className="md:col-span-2 space-y-2">
                                            <FormLabel className="text-sm font-medium text-gray-700">Description</FormLabel>
                                            <FormControl>
                                                <Textarea className="border border-gray-300 rounded-md px-3 py-2 focus:border-pink-500" placeholder="Text goes here" rows={3} {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </section>

                        {/* Upload Cover Photo Section */}
                        <section className="space-y-6">
                            <h2 className="text-xl font-semibold text-gray-800 border-b border-pink-200 pb-2">Upload Cover Photo</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <FormLabel className="text-sm font-medium text-gray-700 block">Upload Photo</FormLabel>
                                    <FormControl>
                                        <Input type="file" accept="image/*" className="h-10 border border-gray-300 rounded-md px-3 py-2 focus:border-pink-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                                    </FormControl>
                                    <FormDescription className="text-xs text-gray-500">Maximum file size 10MB</FormDescription>
                                </div>
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50">
                                    <p className="text-sm text-gray-500">Drop image here or click to browse</p>
                                </div>
                            </div>
                        </section>

                        {/* Categories and Pricing Section with Field Array */}
                        <section className="space-y-6">
                            <h2 className="text-xl font-semibold text-gray-800 border-b border-pink-200 pb-2">Categories and Pricing</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <FormField
                                    control={form.control}
                                    name="serviceCategory"
                                    render={({ field }) => (
                                        <FormItem className="space-y-2">
                                            <FormLabel className="text-sm font-medium text-gray-700">Service Categories</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger className="h-10 border border-gray-300 rounded-md px-3 py-2 focus:border-pink-500">
                                                        <SelectValue placeholder="Electrician" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="electrician">Electrician</SelectItem>
                                                    <SelectItem value="plumber">Plumber</SelectItem>
                                                    <SelectItem value="carpenter">Carpenter</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <div className="space-y-2">
                                    <FormLabel className="text-sm font-medium text-gray-700">Sub Categories</FormLabel>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
                                            Electrical Services
                                        </span>
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
                                            Commercial Electrician
                                        </span>
                                    </div>
                                    <FormDescription className="text-xs text-gray-500">Selected subcategories</FormDescription>
                                </div>
                            </div>
                            <div className="mt-6 space-y-4">
                                <h3 className="text-lg font-medium text-gray-700">Pricing</h3>
                                {fields.map((field, index) => (
                                    <div key={field.id} className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 border border-gray-200 rounded-md bg-gray-50">
                                        <FormField
                                            control={form.control}
                                            name={`pricing.${index}.pricingType`}
                                            render={({ field: pricingField }) => (
                                                <FormItem className="space-y-2">
                                                    <FormLabel className="text-sm font-medium text-gray-700">Pricing Type</FormLabel>
                                                    <Select onValueChange={pricingField.onChange} defaultValue={pricingField.value}>
                                                        <FormControl>
                                                            <SelectTrigger className="h-10 border border-gray-300 rounded-md px-3 py-2 focus:border-pink-500">
                                                                <SelectValue placeholder="Per hour pricing" />
                                                            </SelectTrigger>
                                                        </FormControl>
                                                        <SelectContent>
                                                            <SelectItem value="hourly">Per hour pricing</SelectItem>
                                                            <SelectItem value="fixed">Fixed pricing</SelectItem>
                                                            <SelectItem value="project">Per project</SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <div className="flex items-end space-x-2">
                                            <FormField
                                                control={form.control}
                                                name={`pricing.${index}.amount`}
                                                render={({ field: amountField }) => (
                                                    <FormItem className="flex-1 space-y-2">
                                                        <FormLabel className="text-sm font-medium text-gray-700">Amount</FormLabel>
                                                        <FormControl>
                                                            <Input className="h-10 border border-gray-300 rounded-md px-3 py-2 focus:border-pink-500" placeholder="$50" type="number" {...amountField} />
                                                        </FormControl>
                                                        <FormMessage />
                                                    </FormItem>
                                                )}
                                            />
                                            {fields.length > 1 && (
                                                <Button
                                                    type="button"
                                                    variant="ghost"
                                                    size="sm"
                                                    className="h-10 w-10 p-0 text-red-500 hover:text-red-700"
                                                    onClick={() => remove(index)}
                                                >
                                                    <Trash2 className="h-4 w-4" />
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                ))}
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="sm"
                                    onClick={() => append({ pricingType: '', amount: '' })}
                                    className="border-gray-300 text-gray-600 hover:bg-gray-50"
                                >
                                    <Plus className="h-4 w-4 mr-2" />
                                    Add Pricing
                                </Button>
                            </div>
                        </section>

                        {/* Business Address Section */}
                        <section className="space-y-6">
                            <h2 className="text-xl font-semibold text-gray-800 border-b border-pink-200 pb-2">Business Address</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <FormField
                                    control={form.control}
                                    name="country"
                                    render={({ field }) => (
                                        <FormItem className="space-y-2">
                                            <FormLabel className="text-sm font-medium text-gray-700">Country</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger className="h-10 border border-gray-300 rounded-md px-3 py-2 focus:border-pink-500">
                                                        <SelectValue placeholder="Cameroon" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="Cameroon">Cameroon</SelectItem>
                                                    <SelectItem value="USA">USA</SelectItem>
                                                    <SelectItem value="India">India</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="state"
                                    render={({ field }) => (
                                        <FormItem className="space-y-2">
                                            <FormLabel className="text-sm font-medium text-gray-700">State</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger className="h-10 border border-gray-300 rounded-md px-3 py-2 focus:border-pink-500">
                                                        <SelectValue placeholder="CM" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="CM">CM</SelectItem>
                                                    <SelectItem value="CA">CA</SelectItem>
                                                    <SelectItem value="NY">NY</SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="city"
                                    render={({ field }) => (
                                        <FormItem className="space-y-2">
                                            <FormLabel className="text-sm font-medium text-gray-700">City</FormLabel>
                                            <FormControl>
                                                <Input className="h-10 border border-gray-300 rounded-md px-3 py-2 focus:border-pink-500" placeholder="Cameroon" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="zipCode"
                                    render={({ field }) => (
                                        <FormItem className="space-y-2">
                                            <FormLabel className="text-sm font-medium text-gray-700">ZIP Code</FormLabel>
                                            <FormControl>
                                                <Input className="h-10 border border-gray-300 rounded-md px-3 py-2 focus:border-pink-500" placeholder="2452" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="address"
                                    render={({ field }) => (
                                        <FormItem className="md:col-span-2 space-y-2">
                                            <FormLabel className="text-sm font-medium text-gray-700">Address</FormLabel>
                                            <FormControl>
                                                <Textarea className="border border-gray-300 rounded-md px-3 py-2 focus:border-pink-500" placeholder="2/4 House USA" rows={3} {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </section>

                        {/* Upload Documents Section */}
                        <section className="space-y-6">
                            <h2 className="text-xl font-semibold text-gray-800 border-b border-pink-200 pb-2">Upload Documents</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <FormLabel className="text-sm font-medium text-gray-700 block">Upload Trade License</FormLabel>
                                    <FormControl>
                                        <Input type="file" accept=".pdf,.doc,.docx" className="h-10 border border-gray-300 rounded-md px-3 py-2 focus:border-pink-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                                    </FormControl>
                                    <FormDescription className="text-xs text-gray-500">Maximum file size 10MB</FormDescription>
                                </div>
                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50">
                                    <p className="text-sm text-gray-500">Drop document here or click to browse</p>
                                </div>
                            </div>
                        </section>

                        {/* Submit Button */}
                        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold rounded-lg h-12">
                            Submit
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
}