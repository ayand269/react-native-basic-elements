import CustomeAccordion from './CustomeAccordion';
import MainAccordion from './MainAccordion';
import SubAccordion from './SubAccordion';
const Accordion = Object.assign(MainAccordion, {
    Item: SubAccordion,
    Custom: CustomeAccordion
});
export default Accordion;
//# sourceMappingURL=index.js.map