"use-client";
import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Login | McDonald's",
  description: "**"
};

function login() {
    async function loginAction(formData: FormData) {
        "use server";
        const rawFormData = {
            email: formData.get("email"),
            password: formData.get("password")
        };

        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/login`, {
            method: "POST",
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(rawFormData)
        })

        const responseJson = await response.json();

        cookies().set("Authorization", `Bearer ${responseJson.accessToken}`);
        redirect("/products");
    }
    
    return (
        <>
          <div className="flex h-screen items-center justify-center">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-3xl shadow-md">
              <h2 className="text-3xl font-bold text-center text-yellow-500 mb-12">Login McDonald&apos;s</h2>
              <form action={loginAction} className="space-y-8">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="absolute left-2 -top-6 text-yellow-500 text-sm transition-all"
                  >
                    E-mail
                  </label>
                  <input
                    className="w-full border-b-2 border-gray-300 p-2 focus:border-yellow-500 focus:outline-none"
                    placeholder="Input your e-mail"
                    type="email"
                    id="email"
                    name="email"
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="password"
                    className="absolute left-2 -top-6 text-yellow-500 text-sm transition-all"
                  >
                    Password
                  </label>
                  <input
                    className="w-full border-b-2 border-gray-300 p-2 focus:border-yellow-500 focus:outline-none"
                    placeholder="Input your password"
                    type="password"
                    id="password"
                    name="password"
                  />
                </div>
                <div className="text-sm">
                  <a href="/register" className="text-yellow-500 hover:text-yellow-700">
                    Forgot Your Password? Click here.
                  </a>
                </div>
                <button
                  className="w-full px-4 py-2 text-lg font-semibold text-white bg-yellow-500 rounded-full hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
                  type="submit"
                >
                  Login
                </button>
                <div className="text-sm text-center">
                  {"Don't have an account? Please,"}{" "}
                  <Link
                    href={"/register"}
                    className="text-yellow-500 hover:text-yellow-700"
                  >
                    Register
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </>
    );
}

export default login;