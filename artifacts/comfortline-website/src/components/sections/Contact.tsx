import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

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

const formSchema = z.object({
  name: z.string().min(2, { message: "Имя должно содержать минимум 2 символа" }),
  phone: z.string().min(9, { message: "Введите корректный номер телефона" }),
  from: z.string().min(2, { message: "Укажите место отправления" }),
  to: z.string().min(2, { message: "Укажите место назначения" }),
  date: z.string().min(1, { message: "Укажите дату поездки" }),
  time: z.string().min(1, { message: "Укажите время поездки" }),
  passengers: z.string().min(1, { message: "Укажите количество пассажиров" }),
  comment: z.string().optional(),
});

export function Contact() {
  const { toast } = useToast();

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
      title: "Заявка отправлена!",
      description: "Наш менеджер свяжется с вами в ближайшее время.",
    });
    form.reset();
  }

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
              <h2 className="text-primary font-semibold tracking-wider uppercase text-sm mb-3">Связаться с нами</h2>
              <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Заказать трансфер</h3>
              <p className="text-lg text-muted-foreground mb-8">
                Оставьте заявку онлайн, и наш менеджер свяжется с вами для уточнения деталей и подтверждения заказа. Мы работаем круглосуточно.
              </p>

              <div className="bg-card border border-border p-8 rounded-2xl space-y-6 shadow-sm">
                <div>
                  <div className="text-sm font-medium text-muted-foreground mb-1">Телефон</div>
                  <a href="tel:+375291552776" className="text-2xl font-bold text-foreground hover:text-primary transition-colors">+375 (29) 155-27-76</a>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground mb-1">Email</div>
                  <a href="mailto:info@comfortline.by" className="text-xl font-bold text-foreground hover:text-primary transition-colors">info@comfortline.by</a>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground mb-1">Адрес</div>
                  <div className="text-lg text-foreground">г. Минск, ул. Фёдорова, 19-10</div>
                </div>
              </div>
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
              <h4 className="text-2xl font-bold mb-6 text-foreground">Форма заявки</h4>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Имя</FormLabel>
                          <FormControl>
                            <Input placeholder="Иван" {...field} className="bg-background" />
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
                          <FormLabel>Телефон</FormLabel>
                          <FormControl>
                            <Input placeholder="+375 (__) ___-__-__" {...field} className="bg-background" />
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
                          <FormLabel>Откуда</FormLabel>
                          <FormControl>
                            <Input placeholder="Минск" {...field} className="bg-background" />
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
                          <FormLabel>Куда</FormLabel>
                          <FormControl>
                            <Input placeholder="Аэропорт" {...field} className="bg-background" />
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
                          <FormLabel>Дата</FormLabel>
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
                          <FormLabel>Время</FormLabel>
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
                          <FormLabel>Пассажиры</FormLabel>
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
                        <FormLabel>Комментарий (опционально)</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Особые пожелания, номер рейса..." className="resize-none bg-background" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" size="lg" className="w-full h-12 text-base mt-2 shadow-md shadow-primary/20">
                    Отправить заявку
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
