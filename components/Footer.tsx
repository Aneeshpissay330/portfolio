interface FooterProps {
  title: string;
}

export function Footer({ title }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
  <footer className="glass-effect border-t" style={{ borderTopColor: '#222', borderTopWidth: 1, borderTopStyle: 'solid' }}>
      <div className="container mx-auto spacing-container">
        <div className="text-center spacing-generous">
          <div className="space-y-4">
            <p className="text-muted-foreground text-sm">
              Full Stack & Mobile App Developer
            </p>
            <div className="flex justify-center text-sm text-muted-foreground">
              <span>© {currentYear} {title}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}