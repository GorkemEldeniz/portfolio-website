import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "./ui/button";
import { Icon } from "./ui/icon";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const regex = new RegExp(
	/^(?:(?:https?|ftp):\/\/)?(?:www\.)?[a-z0-9-]+(?:\.[a-z0-9-]+)+[^\s]*$/i
);

const formSchema = z.object({
	name: z.string().min(1, { message: "Name is required." }),
	email: z.string().email({ message: "Invalid email address." }),
	url: z.string().refine((val) => (val ? regex.test(val) : true), {
		message: "Invalid URL format.",
	}),
	message: z.string().min(1, { message: "Message is required." }),
});

type FormInput = z.infer<typeof formSchema>;

export default function Form() {
	const formRef = useRef<HTMLFormElement>(null);

	const { toast } = useToast();

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm<FormInput>({
		resolver: zodResolver(formSchema),
	});

	const onSubmit: SubmitHandler<FormInput> = async () => {
		try {
			// This section is commented out for future reference
			await emailjs.sendForm(
				import.meta.env.VITE_EMAIL_SERVICE_ID,
				import.meta.env.VITE_EMAIL_TEMPLATE_ID,
				formRef.current ?? "",
				{
					publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
				}
			);
			toast({
				description: "Your message has been sent.",
				duration: 1000,
			});
			reset({
				name: "",
				email: "",
				url: "",
				message: "",
			});
		} catch (er) {
			toast({
				description: "An error occurred while sending your message.",
				variant: "destructive",
				duration: 1000,
			});
		}
	};

	return (
		<motion.form
			ref={formRef}
			layout
			className='mb-5 lg:mb-0 lg:w-[40%] grid grid-flow-row gap-5'
			action=''
			onSubmit={handleSubmit(onSubmit)}
		>
			<div className='flex flex-col gap-1'>
				<Input
					className={cn("rounded-[4px]", {
						"text-error border-error placeholder:text-error/80": errors.name,
					})}
					placeholder='Your name'
					{...register("name")}
				/>
				<AnimatePresence>
					{!!errors.name?.message && (
						<motion.span
							className='text-custom-base text-error font-extrabold'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 20 }}
						>
							{errors?.name.message}
						</motion.span>
					)}
				</AnimatePresence>
			</div>

			<div className='flex flex-col gap-1'>
				<Input
					className={cn("rounded-[4px]", {
						"text-error border-error placeholder:text-error/80": errors.email,
					})}
					placeholder='Email'
					{...register("email")}
				/>
				<AnimatePresence>
					{!!errors.email?.message && (
						<motion.span
							className='text-custom-base text-error font-extrabold'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 20 }}
						>
							{errors?.email.message}
						</motion.span>
					)}
				</AnimatePresence>
			</div>

			<div className='flex flex-col gap-1'>
				<Input
					className={cn("rounded-[4px]", {
						"text-error border-error placeholder:text-error/80": errors.url,
					})}
					placeholder='Your website(If exists)'
					{...register("url")}
				/>
				<AnimatePresence>
					{!!errors.url?.message && (
						<motion.span
							className='text-custom-base text-error font-extrabold'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 20 }}
						>
							{errors?.url.message}
						</motion.span>
					)}
				</AnimatePresence>
			</div>

			<div className='flex flex-col gap-1'>
				<Textarea
					className={cn("rounded-[4px]", {
						"text-error border-error placeholder:text-error/80": errors.message,
					})}
					placeholder='How can I help?*'
					{...register("message")}
				/>
				<AnimatePresence>
					{!!errors.message?.message && (
						<motion.span
							className='text-custom-base text-error font-extrabold'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 20 }}
						>
							{errors?.message.message}
						</motion.span>
					)}
				</AnimatePresence>
			</div>
			<ol className='flex gap-6 flex-wrap'>
				<li className='w-full lg:w-fit'>
					<Button
						disabled={isSubmitting}
						className='h-14 font-semibold tracking-wider rounded-[4px]'
						type='submit'
					>
						Get In Touch
					</Button>
				</li>

				<li>
					<motion.a
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.85 }}
						href='https://www.linkedin.com/in/g%C3%B6rkem-eldeniz-017886218/'
						target='_blank'
						className='flex items-center justify-center aspect-square p-[14px] lg:p-4 rounded-[4px] bg-black border-2'
					>
						<Icon
							viewBox='0 0 20 20'
							className='stroke-black fill-white size-5'
							icon='github'
						/>
					</motion.a>
				</li>
				<li>
					<motion.a
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.85 }}
						href='mailto:gorkemeldeniz30@gmail.com'
						target='_blank'
						className='flex items-center justify-center aspect-square p-[14px] lg:p-4 rounded-[4px] bg-black border-2'
					>
						<Icon
							viewBox='0 0 20 20'
							className='stroke-white fill-white size-5'
							icon='gmail'
						/>
					</motion.a>
				</li>
				<li>
					<motion.a
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.85 }}
						href='https://www.linkedin.com/in/g%C3%B6rkem-eldeniz-017886218/'
						target='_blank'
						className='flex items-center justify-center aspect-square p-4 rounded-[4px] bg-white border-2'
					>
						<Icon viewBox='0 0 20 20' className='size-5' icon='linkedin' />
					</motion.a>
				</li>
				<li>
					<motion.a
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.85 }}
						href='https://twitter.com/eldeniz_gorkem'
						target='_blank'
						className='flex items-center justify-center aspect-square p-4 rounded-[4px] bg-white border-2'
					>
						<Icon
							viewBox='0 0 20 20'
							className='stroke-black fill-black size-5'
							icon='twitter'
						/>
					</motion.a>
				</li>
			</ol>
		</motion.form>
	);
}
