import Header from './Components/Header';
import CoreConcept from './Components/CoreConcept';
import { CORE_CONCEPTS, EXAMPLES } from './data';
import TabButton from './Components/TabButton';
import { useState } from 'react';

function App() {
  const [tabContent, setTabContent] = useState('components');

  const handleSelect = (selectedButton) => {
    setTabContent(selectedButton);
  }

  const coreConceptRender = CORE_CONCEPTS.map((concept) => (
    <CoreConcept
      key={concept.title}
      title={concept.title}
      description={concept.description}
      image={concept.image}
    />
  ));

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {coreConceptRender}
          </ul>
        </section>

        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={tabContent === 'components'}
              onSelect={() => handleSelect('components')}>
              Components
            </TabButton>
            <TabButton
              isSelected={tabContent === 'jsx'}
              onSelect={() => handleSelect('jsx')}>
              JSX
            </TabButton>
            <TabButton
              isSelected={tabContent === 'props'}
              onSelect={() => handleSelect('props')}>
              Props
            </TabButton>
            <TabButton
              isSelected={tabContent === 'state'}
              onSelect={() => handleSelect('state')}>
              State
            </TabButton>
          </menu>

          <div id='tab-content'>
            <h3>{EXAMPLES[tabContent].title}</h3>
            <p>{EXAMPLES[tabContent].description}</p>
            <pre>
              <code>
                {EXAMPLES[tabContent].code}
              </code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
