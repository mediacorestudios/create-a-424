import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="text-center space-y-6 p-8">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <h2 className="text-2xl font-semibold">Page Not Found</h2>
      <Button asChild>
        <Link to="/">Go Home</Link>
      </Button>
    </div>
  </div>
);

export default NotFound;
