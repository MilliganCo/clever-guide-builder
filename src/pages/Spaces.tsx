import React from 'react';
import { useApp } from '@/context/AppContext';
import { Heart, Star, ShoppingBag, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const Spaces: React.FC = () => {
  const { spaces } = useApp();

  return (
    <div className="px-4 pt-4 pb-20">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl font-bold">Spaces</h1>
          <p className="text-sm text-muted-foreground">{spaces.length} пространств</p>
        </div>
        <Button size="icon" className="rounded-xl h-10 w-10">
          <Plus className="w-5 h-5" />
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {spaces.map((space) => (
          <div
            key={space.id}
            className="glass-card rounded-2xl overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
          >
            <div
              className="h-28 w-full relative"
              style={{ background: `linear-gradient(135deg, ${space.coverColor}cc, ${space.coverColor}66)` }}
            >
              {space.onSale && (
                <Badge className="absolute top-2 right-2 text-[9px] px-1.5 py-0 rounded-full bg-primary/80 border-0">
                  <ShoppingBag className="w-2.5 h-2.5 mr-0.5" /> On sale
                </Badge>
              )}
              <div className={cn(
                'absolute top-2 left-2 text-[9px] px-1.5 py-0.5 rounded-full glass-card',
                space.visibility === 'private' ? 'text-muted-foreground' : 'text-accent'
              )}>
                {space.visibility === 'private' ? '🔒' : '🌍'} {space.visibility}
              </div>
            </div>
            <div className="p-3">
              <p className="text-sm font-semibold truncate mb-1">{space.name}</p>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-0.5">
                  <Heart className="w-3 h-3" /> {space.likes}
                </span>
                <span className="flex items-center gap-0.5">
                  <Star className="w-3 h-3" /> {space.rating}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Spaces;
