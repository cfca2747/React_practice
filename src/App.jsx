import { useState } from "react";

import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/Button/TabButton.jsx";

//función principal
function App() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  function handleSelect(selectedButton) {
    //selectedButton => 'components', 'jsx', 'props', 'state'
    //console.log('Hello World - Selected');
    //console.log(selectedButton);

    //tabContent = selectedButton;
    setSelectedTopic(selectedButton);
    console.log(setSelectedTopic);
  }
  console.log(EXAMPLES.components);
  //console.log('APP COMPONENT EXECUTING');

  return (
    <div>
      <Header />

      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />

            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />

            <CoreConcept
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />

            <CoreConcept {...CORE_CONCEPTS[3]} />

            {/* <CoreConcept 
          title={CORE_CONCEPTS[3].title}
          description={CORE_CONCEPTS[3].description}
          image={CORE_CONCEPTS[3].image}/> */}

            {/* <CoreConcept 
          title="Components"
          description="The core UI building block."
          image={componentsImg}/> */}
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>

          {/* usando && */}
          {!selectedTopic && <p>Please select a topic</p>}
          {selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
            
          )}

          {/* usando expresión ternaria */}
          {/* {!selectedTopic ? <p>Please select a topic</p> : null} */}
          {/* {selectedTopic ? (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          ) : null} */}
        </section>
      </main>
    </div>
  );
}

export default App;
