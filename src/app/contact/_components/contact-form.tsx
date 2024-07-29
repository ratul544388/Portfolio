import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { sendEmail } from "@/actions/send-mail";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ContactSchema } from "@/schemas";
import { motion } from "framer-motion";
import { useTransition } from "react";
import { toast } from "sonner";
import { Textarea } from "../../../components/ui/textarea";

export const ContactForm = () => {
  const [isPending, startTransition] = useTransition();
  const FramerButton = motion(Button);
  const form = useForm<z.infer<typeof ContactSchema>>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof ContactSchema>) {
    startTransition(() => {
      sendEmail(values).then(({ error, success }) => {
        if (success) {
          toast.success(success);
          form.reset();
        } else if (error) {
          toast.error(error);
        }
      });
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-14 flex flex-col gap-8"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="FULL NAME" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="EMAIL" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="relative">
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    className="resize-none pr-40"
                    placeholder="MESSAGE"
                    {...field}
                    rows={8}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="absolute bottom-3 right-3" disabled={isPending}>
            SEND
          </Button>
        </div>
      </form>
    </Form>
  );
};
