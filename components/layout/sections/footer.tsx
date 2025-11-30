import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon } from "lucide-react";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link href="#" className="flex font-bold items-center">
              <ChevronsDownIcon className="w-9 h-9 mr-2 bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg border border-secondary" />

              <h3 className="text-2xl">AI4ALPHA</h3>
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Product</h3>
            <div>
              <Link href="#features" className="opacity-60 hover:opacity-100">
                Features
              </Link>
            </div>

            <div>
              <Link href="#benefits" className="opacity-60 hover:opacity-100">
                Benefits
              </Link>
            </div>

            <div>
              <Link href="#faq" className="opacity-60 hover:opacity-100">
                FAQ
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Coverage</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                US Equities
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Canadian Equities
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Crypto
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Company</h3>
            <div>
              <Link href="#contact" className="opacity-60 hover:opacity-100">
                Contact Us
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                About
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Careers
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Legal</h3>
            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Privacy
              </Link>
            </div>

            <div>
              <Link href="#" className="opacity-60 hover:opacity-100">
                Terms
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        <section className="">
          <h3 className="">
            &copy; 2024 AI4ALPHA. All rights reserved.
          </h3>
        </section>
      </div>
    </footer>
  );
};
