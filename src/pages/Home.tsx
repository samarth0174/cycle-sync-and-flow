
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import CycleCharacter from '@/components/CycleCharacter';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center justify-center animate-fade-in">
        {/* App Logo with Character */}
        <div className="mb-8 animate-float">
          <CycleCharacter phase="follicular" size="lg" />
        </div>
        
        <h1 className="text-3xl font-bold text-center mb-2">CycleSyncFlow</h1>
        <p className="text-center text-muted-foreground mb-8">
          Track your cycle, sync your workouts, embrace your flow
        </p>

        {/* Main Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          {/* Cycle Tracking Card */}
          <Card className="overflow-hidden glass-morphism">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="rounded-full bg-character-menstrual p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Track Your Cycle</h3>
                  <p className="text-sm text-muted-foreground">Monitor your menstrual phases</p>
                </div>
              </div>
              
              <Link to="/cycle-tracker">
                <Button className="w-full">View Cycle</Button>
              </Link>
            </CardContent>
          </Card>

          {/* Workout Recommendations Card */}
          <Card className="overflow-hidden glass-morphism">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="rounded-full bg-character-follicular p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a2.2 2.2 0 0 0-3.2 0L4.6 6.2a2.2 2.2 0 0 0 0 3.2L12.8 17c.8.8 2 .8 2.8 0Z"/><path d="m21.5 20.5-5.4-5.4"/><path d="M15.3 15.3 8.7 8.7"/></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Workout Recommendations</h3>
                  <p className="text-sm text-muted-foreground">Exercises tailored to your phase</p>
                </div>
              </div>
              
              <Link to="/workouts">
                <Button className="w-full">View Workouts</Button>
              </Link>
            </CardContent>
          </Card>

          {/* Mood Tracking Card */}
          <Card className="overflow-hidden glass-morphism">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="rounded-full bg-character-ovulation p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Mood Tracking</h3>
                  <p className="text-sm text-muted-foreground">Monitor your emotional wellness</p>
                </div>
              </div>
              
              <Link to="/mood-tracker">
                <Button className="w-full">Track Mood</Button>
              </Link>
            </CardContent>
          </Card>

          {/* Journal Card */}
          <Card className="overflow-hidden glass-morphism">
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="rounded-full bg-character-luteal p-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M14 4h4v4h-4z"/><path d="M13.5 4 9 2 6 4l1.5 2"/><path d="M4.5 6.5 3 12l3 3 7-7"/><path d="m8 21 2-1-1-3-3-1"/><path d="M14.5 13.5 16 17l5-1 1-4-3-3-3.5 3.5"/><path d="M15 6h5v4h-5z"/><path d="M10 6h4v4h-4z"/><path d="M6 6h4v4H6z"/><path d="M8 2h8v4H8z"/></svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Workout Journal</h3>
                  <p className="text-sm text-muted-foreground">Log your fitness journey</p>
                </div>
              </div>
              
              <Link to="/journal">
                <Button className="w-full">Open Journal</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
