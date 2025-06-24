export default function Footer() {
  return (
    <footer className=" py-8 mt-16">
      <div className="container mx-auto text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} qtTrading. All rights reserved.
      </div>
    </footer>
  );
}
