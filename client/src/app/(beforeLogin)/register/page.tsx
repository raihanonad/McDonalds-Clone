import { redirect } from "next/navigation";

export const metadata = {
    title: "Register | McDonald's",
    description: "**"
}

export default function Register() {
    async function registerAction(formData: FormData) {
        "use server";

        const rawFormData = {
            name: formData.get("name"),
            username: formData.get("username"),
            email: formData.get("email"),
            password: formData.get("password")
        };

        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/register`, {
            method: "post",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(rawFormData)
        });
        redirect("/login");
    }

    
}