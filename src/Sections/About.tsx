import React from 'react';

export default function About() {
  return (
    <section className="mt-4 mb-5">
      <div className="container">
        <div className="card border-0 shadow-sm p-4 bg-light">
          
          <h2 className="text-success text-center mb-3">Who are we?</h2>

          <p className="text-muted mb-3">
            <strong>Montana Animal Feeds</strong> is committed to providing high-quality,
            affordable, and nutritious animal feeds that help farmers achieve optimal
            livestock performance. We use locally sourced ingredients and advanced
            formulation techniques to guarantee consistent quality and nutrition.
          </p>

          <p className="text-muted mb-0">
            <strong>Serem Farm Feeds</strong> operates as a proud <strong>subsidiary</strong> of{' '}
            <strong>Montana Animal Feeds</strong>, extending our commitment to quality and
            farmer satisfaction through specialized feed production and distribution
            across the region.
          </p>

        </div>
      </div>
    </section>
  );
}
