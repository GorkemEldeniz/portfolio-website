import { useRef, useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import emailjs from "@emailjs/browser";

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
	user_name: z.string().min(2),
	user_email: z.string().email({
		message: "Email adress must be valid",
	}),
	message: z.string().min(4).max(100),
});

export function ContactForm() {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const formRef = useRef<null | HTMLFormElement>(null);

	// 1. Define your form.
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
	});

	async function onSubmit() {
		setIsLoading(true);
		try {
			await emailjs.sendForm(
				import.meta.env.VITE_EMAIL_SERVICE_ID,
				import.meta.env.VITE_EMAIL_TEMPLATE_ID,
				formRef.current ?? "",
				{
					publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
				}
			);
			setIsLoading(false);
		} catch (er) {
			console.log(er);
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<Form {...form}>
			<form
				ref={formRef}
				onSubmit={form.handleSubmit(onSubmit)}
				className='grid grid-flow-row px-6 text-left md:grid-cols-2 gap-x-6 gap-y-3'
			>
				<FormField
					control={form.control}
					name='user_name'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Name</FormLabel>
							<FormControl>
								<Input placeholder='Name' {...field} />
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
					name='user_email'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email Adress</FormLabel>
							<FormControl>
								<Input placeholder='Email' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<div className='md:flex md:justify-end md:col-span-2'>
					<Button
						disabled={isLoading}
						className='w-full text-xl font-light md:text-2xl md:w-fit'
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
