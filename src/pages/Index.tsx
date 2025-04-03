
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Try to navigate to the home page with a slight delay to ensure DOM is ready
    const timer = setTimeout(() => {
      navigate("/", { replace: true });
    }, 100);
    
    return () => clearTimeout(timer);
  }, [navigate]);

  // Fallback UI in case the redirect doesn't work immediately
  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="text-center max-w-md w-full glass-morphism p-8 rounded-xl animate-fade-in">
        <h1 className="text-3xl font-bold mb-4 text-primary">CycleSyncFlow</h1>
        <p className="text-lg text-foreground mb-6">Loading your personalized cycle tracking experience...</p>
        <div className="loading-spinner mx-auto">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
        <a href="/" className="mt-6 inline-block text-primary hover:underline">
          Click here if you're not automatically redirected
        </a>
      </div>
    </div>
  );
};

export default Index;
