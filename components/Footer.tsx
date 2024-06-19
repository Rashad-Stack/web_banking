"use client";

import { signOut } from "@/lib/actions/user.action";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Footer({ user, type = "desktop" }: FooterProps) {
  const router = useRouter();

  const handleLogout = async () => {
    const loggedOut = await signOut();

    if (loggedOut) {
      router.push("/sign-in");
    }
  };

  return (
    <footer className="footer">
      <div
        className={cn({
          footer_name: type === "desktop",
          "footer_name-mobile": type === "mobile",
        })}
      >
        <p className="text-xl font-bold text-gray-700">{user?.name[0]}</p>
      </div>

      <div
        className={cn({
          footer_email: type === "desktop",
          "footer_email-mobile": type === "mobile",
        })}
      >
        <h1 className="text-14 truncate font-semibold text-gray-700">
          {user?.name}
        </h1>
        <h1 className="text-14 truncate font-normal text-gray-600">
          {user?.email}
        </h1>
      </div>
      <div className="footer_image" onClick={handleLogout}>
        <Image src="/icons/logout.svg" fill alt="logout" />
      </div>
    </footer>
  );
}
