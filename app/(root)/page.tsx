import InterviewCard from "@/components/InterviewCard";
import { Button } from "@/components/ui/button";
import { dummyInterviews } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <>
    <section className="card-cta">
      <div className="flex flex-col gap-6 max-w-lg">
        <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
        <p className="text-lg">
          Practice real interview questions & get instant feedback
        </p>

        <Button asChild className="btn-primary max-sm:w-full">
          <Link href="/interview">Start an Interview</Link>
        </Button>
      </div>

      <Image
        src="/robot.png"
        alt="robo-dude"
        width={400}
        height={400}
        className="max-sm:hidden"
      />
    </section>

    <section className="flex flex-col gap-6 mt-8">
    <h2>Your Interviews</h2>

    {dummyInterviews?.map((interview) => (
              <InterviewCard
                key={interview.id}
                userId={interview.userId}
                interviewId={interview.id}
                role={interview.role}
                type={interview.type}
                techstack={interview.techstack}
                createdAt={interview.createdAt}
              />
    ))
            }

    <p>You haven&apos;t taken any interviews yet</p>




    </section>

    <section className="flex flex-col gap-6 mt-8">
      <h2>Take an Interview</h2>

      <div className="interviews-section">

      {dummyInterviews?.map((interview) => (
              <InterviewCard
                key={interview.id}
                userId={interview.userId}
                interviewId={interview.id}
                role={interview.role}
                type={interview.type}
                techstack={interview.techstack}
                createdAt={interview.createdAt}
              />
    ))
            }
      <p>There are no interviews available</p>

      </div>
    </section>

    </>

    
  );
};

export default Home;
