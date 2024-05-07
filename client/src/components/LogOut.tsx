"use client";

import { logout } from "@/actions/user"

export default function LogoutButton() {
    return (
        <button onClick={() => logout()} className="btn btn-error text-white">
          Logout
        </button>
    );
}