export default function Footer() {
  return (
    <footer className="my-4">
      <div className="flex items-center justify-center place-content-center mx-auto py-4">
        <p className="text-white text-center">
          &copy; {new Date().getFullYear()} Aghogho Daniel Bogare. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
