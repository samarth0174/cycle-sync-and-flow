
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CycleCharacter from '@/components/CycleCharacter';

const MoodTracker = () => {
  // Mood options
  const moodOptions = [
    { label: "Energetic", icon: "⚡" },
    { label: "Happy", icon: "😊" },
    { label: "Calm", icon: "😌" },
    { label: "Tired", icon: "😴" },
    { label: "Anxious", icon: "😰" },
    { label: "Irritable", icon: "😤" },
    { label: "Sad", icon: "😢" },
    { label: "Focused", icon: "🧠" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Mood Tracker</h1>
        <p className="text-muted-foreground text-center max-w-md">
          Track your mood before and after workouts throughout your cycle
        </p>
      </div>

      <Tabs defaultValue="track" className="w-full mb-8">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="track">Track Mood</TabsTrigger>
          <TabsTrigger value="history">Mood History</TabsTrigger>
        </TabsList>

        <TabsContent value="track">
          <Card className="glass-morphism">
            <CardHeader>
              <div className="flex items-center gap-3">
                <CycleCharacter phase="menstrual" size="sm" />
                <div>
                  <CardTitle>How are you feeling today?</CardTitle>
                  <CardDescription>Day 3 of your cycle (Menstrual Phase)</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">Select your mood:</h3>
                <div className="grid grid-cols-4 gap-3">
                  {moodOptions.map((mood) => (
                    <Button 
                      key={mood.label} 
                      variant="outline" 
                      className="flex flex-col h-auto py-3 gap-1"
                    >
                      <span className="text-2xl">{mood.icon}</span>
                      <span className="text-xs">{mood.label}</span>
                    </Button>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3">Add a note (optional):</h3>
                <textarea 
                  className="w-full p-3 border rounded-md h-24 resize-none"
                  placeholder="How are you feeling? Any symptoms to note?"
                />
              </div>
              
              <div className="grid gap-2 mb-2">
                <Button>Save Mood</Button>
                <Button variant="outline">Cancel</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history">
          <Card className="glass-morphism">
            <CardHeader>
              <CardTitle>Your Mood History</CardTitle>
              <CardDescription>See how your mood changes with your cycle</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Placeholder for mood history chart/visualization */}
              <div className="bg-muted p-6 text-center rounded-md mb-4">
                <p className="text-muted-foreground">Mood visualization will be displayed here</p>
              </div>
              
              <h3 className="font-medium mb-2">Recent Entries</h3>
              <div className="space-y-2">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="p-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">😊</span>
                        <div>
                          <p className="font-medium">Happy</p>
                          <p className="text-xs text-muted-foreground">June {10+i}, 2023 - Post-workout</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">View</Button>
                    </div>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MoodTracker;
