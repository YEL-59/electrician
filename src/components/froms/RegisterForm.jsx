'use client';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
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

const formSchema = z.object({
    fullName: z.string().min(1, 'Full name is required'),
    phone: z.string().min(1, 'Phone is required'),
    email: z.string().email('Valid email is required'),
    country: z.string().min(1, 'Country is required'),
    state: z.string().min(1, 'State is required'),
    city: z.string().min(1, 'City is required'),
    zipCode: z.string().min(1, 'ZIP code is required'),
    message: z.string().optional(),
});



export default function RegisterForm() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: 'John Smith',
            phone: '+91-91234567',
            email: 'john@gmail.com',
            country: 'Cameroon',
            state: 'CM',
            city: 'City',
            zipCode: '2452',
            message: '',
        },
    });

    function onSubmit(values) {
        console.log(values); // Handle form submission (e.g., API call)
    }

    return (
        <div className="min-h-screen bg-[] p-8">
            <div className="max-w-4xl mx-auto border rounded-xl p-5">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Register for Annual Global 2026</h1>
                    <p className="text-gray-600 text-lg">Fill up the form below to register participate annual electrician 2026</p>
                </div>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="py-5">
                        {/* Personal Information Section */}
                        <section className="space-y-6">
                            <h2 className="text-xl font-semibold text-gray-800 border-b border-pink-200 pb-2">Personal Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <FormField
                                    control={form.control}
                                    name="fullName"
                                    render={({ field }) => (
                                        <FormItem className="space-y-2">
                                            <FormLabel className="text-sm font-medium text-gray-700">Full Name</FormLabel>
                                            <FormControl>
                                                <Input className="h-10 border border-gray-300 rounded-md px-3 py-2 focus:border-pink-500" placeholder="John Smith" {...field} />
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
                                                <Input className="h-10 border border-gray-300 rounded-md px-3 py-2 focus:border-pink-500" placeholder="john@gmail.com" type="email" {...field} />
                                            </FormControl>
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
                                                <Input className="h-10 border border-gray-300 rounded-md px-3 py-2 focus:border-pink-500" placeholder="City" {...field} />
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
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem className="md:col-span-2 space-y-2">
                                            <FormLabel className="text-sm font-medium text-gray-700">Message</FormLabel>
                                            <FormControl>
                                                <Textarea className="border border-gray-300 rounded-md px-3 py-2 focus:border-pink-500" placeholder="Message" rows={4} {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
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