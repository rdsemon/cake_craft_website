import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/50 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-serif font-semibold text-foreground mb-4">
              Artisan Pâtisserie
            </h3>
            <p className="text-muted-foreground text-sm">
              Handcrafted cakes and pastries made with premium ingredients and passion.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Navigate</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Collections</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Custom Orders</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Shipping Info</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Returns</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Follow</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Instagram</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Facebook</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Twitter</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Pinterest</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Artisan Pâtisserie. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
