import { useState } from "react";
import { useCheatCode } from "@/contexts/CheatCodeContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Lock, Unlock } from "lucide-react";
import { toast } from "sonner";

export function CheatCodeInput() {
  const [code, setCode] = useState("");
  const [open, setOpen] = useState(false);
  const { enterCheatCode } = useCheatCode();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!code.trim()) {
      toast.error("Veuillez entrer un code");
      return;
    }

    if (enterCheatCode(code)) {
      toast.success("[Unlock] Code accepté ! Contenu déverrouillé !");
      setCode("");
      setOpen(false);
    } else {
      toast.error("[X] Code invalide");
      setCode("");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="fixed bottom-4 right-4 gap-2 opacity-50 hover:opacity-100 transition-opacity"
          title="Entrer un code de déverrouillage"
        >
          <Lock className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md bg-slate-900 border border-slate-700">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Unlock className="w-5 h-5 text-accent" />
            Code de Déverrouillage
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              placeholder="Entrez le code secret..."
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="bg-slate-800 border-slate-600 text-white placeholder:text-slate-500"
              autoFocus
            />
            <p className="text-xs text-muted-foreground">
              Entrez un code pour déverrouiller du contenu caché.
            </p>
          </div>
          <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-black font-bold">
            Déverrouiller
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
