import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useApp } from '@/context/AppContext';
import Scene3D from '@/components/3d/Scene3D';
import { RARITY_LABELS } from '@/data/mockData';
import { Plus, RotateCcw, Share2, Clock, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const DailyDrop: React.FC = () => {
  const { currentDrop, claimDailyDrop, user } = useApp();
  const [revealed, setRevealed] = useState(false);
  const [inspecting, setInspecting] = useState(false);

  if (!currentDrop) {
    return (
      <div className="flex flex-col items-center justify-center h-full px-6 text-center">
        <Clock className="w-16 h-16 text-muted-foreground/40 mb-4" />
        <h2 className="text-xl font-bold mb-2">Дроп получен!</h2>
        <p className="text-muted-foreground text-sm">Завтра тебя ждёт новый 3D-объект</p>
      </div>
    );
  }

  if (user.dailyDropClaimed) {
    return (
      <div className="flex flex-col items-center justify-center h-full px-6 text-center">
        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mb-4">
          <Sparkles className="w-5 h-5 text-primary" />
        </div>
        <h2 className="text-xl font-bold mb-2">Объект в инвентаре!</h2>
        <p className="text-muted-foreground text-sm mb-1">{currentDrop.name} добавлен в коллекцию</p>
        <p className="text-muted-foreground/60 text-xs flex items-center gap-1 mt-4">
          <Clock className="w-3 h-3" /> Завтра будет новый дроп
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full relative">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full blur-[120px] animate-pulse-glow"
          style={{ backgroundColor: `${currentDrop.color}33` }} />
      </div>

      {/* 3D Scene */}
      <div className="flex-1 relative z-10">
        <AnimatePresence mode="wait">
          {!revealed ? (
            <motion.div
              key="capsule"
              className="w-full h-full flex flex-col items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.2 }}
            >
              <div className="w-40 h-40 mb-6">
                <Scene3D geometry="icosahedron" color="#8b5cf6" distort autoRotate />
              </div>
              <h2 className="text-xl font-bold mb-2">Daily Drop</h2>
              <p className="text-muted-foreground text-sm mb-6">Нажми чтобы раскрыть</p>
              <Button
                onClick={() => setRevealed(true)}
                className="h-12 px-8 text-base font-semibold rounded-xl glow-purple"
              >
                <Sparkles className="mr-2 w-5 h-5" /> Раскрыть!
              </Button>
            </motion.div>
          ) : (
            <motion.div
              key="revealed"
              className="w-full h-full flex flex-col items-center pt-8"
              initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, type: 'spring' }}
            >
              <div className={cn('w-56 h-56 mb-4', inspecting && 'w-72 h-72')}>
                <Scene3D
                  geometry={currentDrop.geometry}
                  color={currentDrop.color}
                  scale={currentDrop.scale}
                  autoRotate
                  distort={currentDrop.type === 'dynamic'}
                />
              </div>

              {/* Object card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="glass-card rounded-2xl p-5 mx-6 w-full max-w-sm"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-bold">{currentDrop.name}</h3>
                  <Badge className={`rarity-badge-${currentDrop.rarity} text-xs px-2 py-0.5 rounded-full border-0`}>
                    {RARITY_LABELS[currentDrop.rarity]}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground mb-1">Set: {currentDrop.set}</p>
                <p className="text-xs text-muted-foreground mb-3">{currentDrop.description}</p>
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="outline" className="text-[10px] rounded-full">
                    {currentDrop.type === 'dynamic' ? '⚡ Dynamic' : '🧊 Static'}
                  </Badge>
                </div>

                <div className="flex gap-2">
                  <Button
                    onClick={() => { claimDailyDrop(); }}
                    className="flex-1 h-10 rounded-xl text-sm font-semibold"
                  >
                    <Plus className="w-4 h-4 mr-1" /> Add to Space
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setInspecting(!inspecting)}
                    className="h-10 rounded-xl text-sm glass-card border-border/50"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="h-10 rounded-xl text-sm glass-card border-border/50"
                  >
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom hint */}
      {revealed && !user.dailyDropClaimed && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center text-xs text-muted-foreground/50 pb-20 flex items-center justify-center gap-1"
        >
          <Clock className="w-3 h-3" /> Завтра будет новый дроп
        </motion.p>
      )}
    </div>
  );
};

export default DailyDrop;
