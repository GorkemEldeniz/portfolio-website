import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@components/ui/form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
	name: z.string().min(2),
	email: z.string().email({
		message: "Email adress must be valid",
	}),
	message: z.string().min(4).max(100),
});

export function ContactForm() {
	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
	});

	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className='grid grid-flow-row px-6 text-left md:grid-cols-2 gap-x-6 gap-y-3'
			>
				<FormField
					control={form.control}
					name='name'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input placeholder='name' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='message'
					render={({ field }) => (
						<FormItem className='flex flex-col md:row-span-2'>
							<FormLabel>Message</FormLabel>
							<FormControl>
								<Textarea className='flex-1' placeholder='message' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email Adress</FormLabel>
							<FormControl>
								<Input placeholder='email' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<div className='flex justify-end md:col-span-2'>
					<Button
						className='text-xl font-light md:text-2xl md:w-fit'
						size='lg'
						type='submit'
					>
						Submit
					</Button>
				</div>
			</form>
		</Form>
	);
}

export default ContactForm;
