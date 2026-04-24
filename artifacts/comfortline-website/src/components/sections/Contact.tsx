import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { useLang } from "@/context/language-context";
import { ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const { toast } = useToast();
  const { t } = useLang();
  const f = t.contact.form;

  const formSchema = z.object({
    name: z.string().min(2, { message: f.errors.name }),
    phone: z.string().min(9, { message: f.errors.phone }),
    from: z.string().min(2, { message: f.errors.from }),
    to: z.string().min(2, { message: f.errors.to }),
    date: z.string().min(1, { message: f.errors.date }),
    time: z.string().min(1, { message: f.errors.time }),
    passengers: z.string().min(1, { message: f.errors.passengers }),
    comment: z.string().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      from: "",
      to: "",
      date: "",
      time: "",
      passengers: "",
      comment: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: f.toastTitle,
      description: f.toastDesc,
    });
    form.reset();
  }

  const lic = t.contact.licensing;

  return (
    <section id="contact" className="py-24 bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">{t.contact.label}</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-6">{t.contact.heading}</h3>
              <p className="text-lg text-muted-foreground mb-8">
                {t.contact.subheading}
              </p>

              <div className="bg-card border border-border p-8 rounded-2xl space-y-6 shadow-sm">
                <div>
                  <div className="text-sm font-medium text-muted-foreground mb-1">{t.contact.phone}</div>
                  <a href="tel:+375291552776" className="text-2xl font-bold text-foreground hover:text-primary transition-colors">+375 (29) 155-27-76</a>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground mb-1">{t.contact.email}</div>
                  <a href="mailto:info@comfortline.by" className="text-xl font-bold text-foreground hover:text-primary transition-colors">info@comfortline.by</a>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground mb-1">{t.contact.address}</div>
                  <div className="text-lg text-foreground">г. Минск, ул. Фёдорова, 19-10</div>
                </div>
              </div>

              {/* Licensing info */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-8 bg-card border border-border/60 rounded-2xl p-6"
              >
                <h4 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">{lic.heading}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  {lic.text}
                </p>
                <div className="space-y-2 text-xs text-muted-foreground">
                  <div>
                    <span className="font-medium text-foreground/70">{lic.registryLabel} </span>
                    <a
                      href={lic.registryUrl1}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      {lic.registryUrl1} <ExternalLink className="h-3 w-3" />
                    </a>
                    {" / "}
                    <a
                      href={lic.registryUrl2}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      {lic.registryUrl2} <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                  <div>
                    <span className="font-medium text-foreground/70">{lic.directLinkLabel} </span>
                    <a
                      href={lic.directLinkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline inline-flex items-center gap-1"
                    >
                      {lic.directLinkUrl} <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card border border-border p-8 rounded-2xl shadow-lg"
            >
              <h4 className="text-2xl font-bold mb-6 text-foreground">{f.heading}</h4>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{f.name}</FormLabel>
                          <FormControl>
                            <Input placeholder={f.namePlaceholder} {...field} className="bg-background" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{f.phone}</FormLabel>
                          <FormControl>
                            <Input placeholder={f.phonePlaceholder} {...field} className="bg-background" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="from"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{f.from}</FormLabel>
                          <FormControl>
                            <Input placeholder={f.fromPlaceholder} {...field} className="bg-background" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="to"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{f.to}</FormLabel>
                          <FormControl>
                            <Input placeholder={f.toPlaceholder} {...field} className="bg-background" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{f.date}</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} className="bg-background" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="time"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{f.time}</FormLabel>
                          <FormControl>
                            <Input type="time" {...field} className="bg-background" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="passengers"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{f.passengers}</FormLabel>
                          <FormControl>
                            <Input type="number" min="1" max="8" placeholder="1" {...field} className="bg-background" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="comment"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{f.comment}</FormLabel>
                        <FormControl>
                          <Textarea placeholder={f.commentPlaceholder} className="resize-none bg-background" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" size="lg" className="w-full h-12 text-base mt-2 shadow-md shadow-primary/20">
                    {f.submit}
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
