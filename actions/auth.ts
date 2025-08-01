'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
// import { headers } from 'next/headers'

export async function SignUp(formData: FormData) {
    const supabase = await createClient()

    const credentials = {
        username: formData.get('username') as string,
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error, data } = await supabase.auth.signUp({
        email: credentials.email,
        password: credentials.password,
        options: {
            data: {
                username: credentials.username,
            },
        },
    })

    if (error) {
        return {
            status: error?.message,
            user: null,
        };
    } else if (data?.user?.identities?.length === 0) {
        return {
            status: 'User with this email already exists, please try another one.',
            user: null,
        };
    }

    revalidatePath('/', 'layout')
    return {status: 'success', user: data.user};
}


export async function SignIn(formData: FormData) {
    const supabase = await createClient()

    const credentials = {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }

    const { error, data } = await supabase.auth.signInWithPassword({
        email: credentials.email,
        password: credentials.password,
    })

    if (error) {
        return {
            status: error?.message,
            user: null,
        };
    }

    // TODO: create a user instance in User_profiles table

    revalidatePath('/', 'layout')
    return {status: 'success', user: data.user};
}

export async function SignOut() {
    const supabase = await createClient()

    const { error } = await supabase.auth.signOut()

    if (error) {
        return {
            status: error?.message,
        };
    }

    revalidatePath('/', 'layout')
    redirect('/landing-page')
}