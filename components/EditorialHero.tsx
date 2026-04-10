import Image from 'next/image';
import { Button } from './Button';

export function EditorialHero() {
  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-canvas items-center pt-16 md:pt-0">
      
      {/* Left Column: Text Content */}
      <div className="flex flex-col justify-center px-8 md:px-20 lg:px-32 py-16">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted mb-6">
          Editorial Interfaces
        </p>
        
        <h1 className="font-serif text-[56px] md:text-[72px] font-semibold text-ink leading-[1.1] mb-6">
          Designing interfaces<br />that resonate.
        </h1>
        
        <p className="text-lg text-body leading-[1.6] mb-12 max-w-md">
          Adriana So: Premium UX and Technical Web Development for the modern era.
        </p>
        
        <div className="flex">
          <Button label="Explore Work" href="/systems" variant="primary" />
        </div>
      </div>

      {/* Right Column: Editorial Image */}
      <div className="relative w-full h-[60vh] md:h-screen flex items-center justify-center bg-canvas">
        <Image 
          src="/hero-native-mac-core-v2.png" 
          alt="A refined high-fidelity native styling of an Apple macOS aesthetic desktop collage" 
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

    </section>
  );
}
