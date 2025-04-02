import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import CycleCharacter from '@/components/CycleCharacter';

const Workouts = () => {
  // Workout recommendations based on cycle phase
  const workoutRecommendations = [
    {
      title: "Gentle Yoga Flow",
      description: "A restorative practice perfect for your menstrual phase",
      duration: "20 min",
      intensity: "Low",
      phase: "menstrual" as const
    },
    {
      title: "Progressive Strength",
      description: "Build strength gradually during your follicular phase",
      duration: "30 min",
      intensity: "Medium",
      phase: "follicular" as const
    },
    {
      title: "HIIT Cardio Blast",
      description: "Channel your peak energy during ovulation",
      duration: "25 min",
      intensity: "High",
      phase: "ovulation" as const
    },
    {
      title: "Endurance Training",
      description: "Focus on endurance during your luteal phase",
      duration: "35 min",
      intensity: "Medium",
      phase: "luteal" as const
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Workout Recommendations</h1>
        <p className="text-muted-foreground text-center max-w-md">
          Exercises tailored to your current cycle phase
        </p>
      </div>

      {/* Current Phase Recommendation */}
      <Card className="mb-8 overflow-hidden glass-morphism">
        <CardHeader className="bg-character-menstrual bg-opacity-20 pb-2">
          <div className="flex items-center gap-3">
            <CycleCharacter phase="menstrual" size="sm" />
            <CardTitle>Recommended for Menstrual Phase</CardTitle>
          </div>
          <CardDescription>Day 3 of your cycle</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <h2 className="text-xl font-semibold mb-2">Focus on Recovery & Gentle Movement</h2>
          <p className="text-muted-foreground mb-4">
            During your menstrual phase, your energy is naturally lower. 
            Gentle, restorative exercises are ideal to support your body.
          </p>
          
          <div className="grid gap-4 md:grid-cols-2 mb-4">
            {workoutRecommendations.filter(w => w.phase === 'menstrual').map((workout, index) => (
              <Card key={index} className="border border-primary/20">
                <CardContent className="p-4">
                  <h3 className="font-semibold">{workout.title}</h3>
                  <p className="text-sm text-muted-foreground">{workout.description}</p>
                  <div className="flex gap-2 mt-2">
                    <span className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full">
                      {workout.duration}
                    </span>
                    <span className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full">
                      {workout.intensity} intensity
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Button className="w-full">Start Workout</Button>
        </CardContent>
      </Card>

      {/* Other Phase Recommendations */}
      <h2 className="text-xl font-semibold mb-4">Other Cycle Phases</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {workoutRecommendations.filter(w => w.phase !== 'menstrual').map((workout, index) => (
          <Card key={index} className="glass-morphism overflow-hidden">
            <CardHeader className={`bg-character-${workout.phase} bg-opacity-20 pb-2`}>
              <div className="flex items-center gap-2">
                <CycleCharacter phase={workout.phase} size="sm" />
                <CardTitle className="text-base">{workout.title}</CardTitle>
              </div>
              <CardDescription>For {workout.phase} phase</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-sm text-muted-foreground mb-3">{workout.description}</p>
              <div className="flex gap-2 mb-3">
                <span className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full">
                  {workout.duration}
                </span>
                <span className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full">
                  {workout.intensity}
                </span>
              </div>
              <Button variant="outline" size="sm" className="w-full">View Details</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Workouts;
