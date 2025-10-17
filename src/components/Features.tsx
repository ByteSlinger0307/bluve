
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const FeatureCard = ({ icon, title, description, index }: FeatureCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);
  
  return (
    <div 
      ref={cardRef}
      className={cn(
        "feature-card glass-card opacity-0 p-4 sm:p-6",
        "lg:hover:bg-gradient-to-br lg:hover:from-white lg:hover:to-pulse-50",
        "transition-all duration-300"
      )}
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{title}</h3>
      <p className="text-gray-600 text-sm sm:text-base">{description}</p>
    </div>
  );
};

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animate-fade-in");
              }, index * 100);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section className="py-12 sm:py-16 md:py-20 pb-0 relative bg-gray-50" id="features" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-10 sm:mb-16">
          <div className="pulse-chip mx-auto mb-3 sm:mb-4 opacity-0 fade-in-element">
            <span>Features</span>
          </div>
          <h2 className="section-title mb-3 sm:mb-4 opacity-0 fade-in-element">
            Refined Design, <br className="hidden sm:block" />Human-Centric Essence
          </h2>
          <p className="section-subtitle mx-auto opacity-0 fade-in-element">
            Built with timeless artistry and modern precision to reflect your brand's soul in every drop.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <FeatureCard
            icon={null}
            title="Evolving Aesthetics"
            description="Bluvé evolves with every collaboration — tailoring each bottle's design and essence to echo your brand's unique character and vision."
            index={0}
          />
          <FeatureCard
            icon={null}
            title="Effortless Expression"
            description="From label to silhouette, every detail flows naturally — a visual and tactile language that speaks elegance without saying a word."
            index={1}
          />
          <FeatureCard
            icon={null}
            title="Sculpted Perfection"
            description="Every curve, texture, and reflection is crafted with precision — transforming each bottle into a statement of symmetry, grace, and modern artistry."
            index={2}
          />
          <FeatureCard
            icon={null}
            title="Designed for Presence"
            description="Bluvé complements its surroundings with quiet confidence — elevating tables, boardrooms, and events through visual harmony and refined presence."
            index={3}
          />
          <FeatureCard
            icon={null}
            title="Pure Integrity"
            description="Our sourcing and sealing process preserve nature's purity and your trust — ensuring every sip remains untouched, untainted, and authentically Bluvé."
            index={4}
          />
          <FeatureCard
            icon={null}
            title="Tailored for You"
            description="From intimate gatherings to grand events, Bluvé adapts seamlessly — personalized labels, curated editions, and service built entirely around you."
            index={5}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
