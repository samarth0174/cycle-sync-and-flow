
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import CycleCharacter from '@/components/CycleCharacter';

const CycleTracker = () => {
  // Placeholder for cycle data
  const cyclePhases = [
    { name: 'Menstrual', days: '1-5', current: true, phase: 'menstrual' as const },
    { name: 'Follicular', days: '6-11', current: false, phase: 'follicular' as const },
    { name: 'Ovulation', days: '12-16', current: false, phase: 'ovulation' as const },
    { name: 'Luteal', days: '17-28', current: false, phase: 'luteal' as const },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Cycle Tracker</h1>
        <p className="text-muted-foreground text-center max-w-md">
          Track your menstrual cycle phases and understand your body better
        </p>
      </div>

      {/* Current Phase */}
      <Card className="mb-8 glass-morphism">
        <CardHeader>
          <CardTitle className="text-center">Your Current Phase</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <div className="mb-4 animate-float">
            <CycleCharacter phase="menstrual" size="lg" />
          </div>
          <h2 className="text-2xl font-semibold">Menstrual Phase</h2>
          <p className="text-muted-foreground">Day 3 of your cycle</p>
          
          <div className="mt-6 grid gap-3">
            <Button variant="outline">Log Symptoms</Button>
            <Button>Update Period</Button>
          </div>
        </CardContent>
      </Card>

      {/* Cycle Phases */}
      <h2 className="text-xl font-semibold mb-4">Cycle Phases</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {cyclePhases.map((phase) => (
          <Card 
            key={phase.name} 
            className={`${
              phase.current 
                ? 'border-primary border-2' 
                : ''
            } hover:shadow-md transition-shadow glass-morphism`}
          >
            <CardContent className="p-4 flex flex-col items-center">
              <div className="mb-2">
                <CycleCharacter phase={phase.phase} size="sm" />
              </div>
              <h3 className="font-semibold">{phase.name}</h3>
              <p className="text-sm text-muted-foreground">Days {phase.days}</p>
              {phase.current && (
                <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full mt-2">
                  Current
                </span>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Calendar Placeholder */}
      <Card className="glass-morphism">
        <CardHeader>
          <CardTitle>Calendar View</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-muted p-6 text-center rounded-md">
            <p className="text-muted-foreground">Calendar view will be implemented here</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CycleTracker;
