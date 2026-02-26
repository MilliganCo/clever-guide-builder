import React from 'react';
import { useApp } from '@/context/AppContext';
import Scene3D from '@/components/3d/Scene3D';
import { Badge } from '@/components/ui/badge';
import { RARITY_LABELS } from '@/data/mockData';
import { cn } from '@/lib/utils';

const Inventory: React.FC = () => {
  const { inventory } = useApp();

  return (
    <div className="px-4 pt-4 pb-20">
      <h1 className="text-2xl font-bold mb-1">Inventory</h1>
      <p className="text-sm text-muted-foreground mb-4">{inventory.length} объектов</p>

      <div className="grid grid-cols-2 gap-3">
        {inventory.map((obj) => (
          <div
            key={obj.id}
            className={cn(
              'glass-card rounded-2xl overflow-hidden transition-transform duration-200 hover:scale-[1.02] cursor-pointer'
            )}
          >
            <div className="h-32 w-full">
              <Scene3D geometry={obj.geometry} color={obj.color} scale={[0.8, 0.8, 0.8]} autoRotate />
            </div>
            <div className="p-3">
              <p className="text-sm font-semibold truncate">{obj.name}</p>
              <div className="flex items-center justify-between mt-1">
                <span className="text-[10px] text-muted-foreground">{obj.set}</span>
                <Badge className={`rarity-badge-${obj.rarity} text-[9px] px-1.5 py-0 rounded-full border-0`}>
                  {RARITY_LABELS[obj.rarity]}
                </Badge>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
