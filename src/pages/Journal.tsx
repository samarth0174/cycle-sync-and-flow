
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CycleCharacter from '@/components/CycleCharacter';

const Journal = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Workout Journal</h1>
        <p className="text-muted-foreground text-center max-w-md">
          Keep track of your fitness journey throughout your cycle
        </p>
      </div>

      <Tabs defaultValue="new" className="w-full mb-8">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="new">New Entry</TabsTrigger>
          <TabsTrigger value="history">Journal History</TabsTrigger>
        </TabsList>

        <TabsContent value="new">
          <Card className="glass-morphism">
            <CardHeader>
              <div className="flex items-center gap-3">
                <CycleCharacter phase="menstrual" size="sm" />
                <div>
                  <CardTitle>New Journal Entry</CardTitle>
                  <CardDescription>Day 3 of your cycle (Menstrual Phase)</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1 block">Entry Title</label>
                <Input placeholder="Give your entry a title..." />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-1 block">Workout Type</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {["Yoga", "Cardio", "Strength", "Stretching"].map((type) => (
                    <Button key={type} variant="outline" className="justify-start">
                      {type}
                    </Button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-1 block">How was your workout?</label>
                <textarea 
                  className="w-full p-3 border rounded-md h-32 resize-none"
                  placeholder="Write about your workout experience, how you felt, and any notes you want to remember..."
                />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-1 block">Energy Level</label>
                <div className="grid grid-cols-5 gap-2">
                  {[1, 2, 3, 4, 5].map((level) => (
                    <Button key={level} variant="outline" className="p-2">
                      {level}
                    </Button>
                  ))}
                  <span className="text-xs text-muted-foreground mt-1">Low</span>
                  <span className="col-span-3"></span>
                  <span className="text-xs text-muted-foreground mt-1 text-right">High</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button className="flex-1">Save Entry</Button>
              <Button variant="outline">Cancel</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="history">
          <Card className="glass-morphism">
            <CardHeader>
              <CardTitle>Journal History</CardTitle>
              <CardDescription>Browse your past workout entries</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { 
                    title: "Gentle Morning Yoga",
                    date: "June 12, 2023",
                    type: "Yoga",
                    phase: "menstrual" as const,
                    excerpt: "Felt really good to stretch gently today..."
                  },
                  { 
                    title: "Strength Training Session",
                    date: "June 8, 2023",
                    type: "Strength",
                    phase: "follicular" as const,
                    excerpt: "Increased my weights today and felt strong!"
                  },
                  { 
                    title: "HIIT Workout",
                    date: "June 3, 2023",
                    type: "Cardio",
                    phase: "ovulation" as const,
                    excerpt: "Had so much energy for this intense session..."
                  },
                ].map((entry, i) => (
                  <Card key={i} className="overflow-hidden border-l-4" style={{ borderLeftColor: `var(--character-${entry.phase})` }}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold">{entry.title}</h3>
                          <p className="text-xs text-muted-foreground">{entry.date} - {entry.type}</p>
                        </div>
                        <CycleCharacter phase={entry.phase} size="sm" />
                      </div>
                      <p className="text-sm line-clamp-2">{entry.excerpt}</p>
                      <Button variant="link" className="p-0 h-auto mt-1">Read more</Button>
                    </CardContent>
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

export default Journal;
