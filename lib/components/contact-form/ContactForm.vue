<script setup lang="ts">
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Textarea } from '~/components/ui/textarea'
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage
} from '~/components/ui/form'

const onSubmit = () => {
  // Handle form submission
  console.log('Form submitted')
}
</script>

<template>
  <div class="w-full max-w-md mx-auto">
    <form @submit.prevent="onSubmit" class="space-y-6">
      <FormField v-slot="{ componentField }" name="name">
        <FormItem>
          <FormLabel>Name</FormLabel>
          <FormControl>
            <Input v-bind="componentField" placeholder="Your name" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      
      <FormField v-slot="{ componentField }" name="email">
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input v-bind="componentField" type="email" placeholder="Your email" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      
      <FormField v-slot="{ componentField }" name="message">
        <FormItem>
          <FormLabel>Message</FormLabel>
          <FormControl>
            <Textarea v-bind="componentField" placeholder="Your message" rows="4" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      
      <Button type="submit" class="w-full">Send Message</Button>
    </form>
  </div>
</template>