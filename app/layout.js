export const metadata = {
  title: "MaroBridge | Hard-to-Find Industrial Parts",
  description: "Send us a part number, equipment model, photo, or drawing. MaroBridge helps source hard-to-find and discontinued industrial replacement parts."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
