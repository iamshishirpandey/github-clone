import { Search } from "heroicons-react";
import TextInput from "../../components/TextField/TextField";

// TODO: Fix typescript issue
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SearchField: React.FC<any> = ({ currentRefinement, refine }) => <TextInput className="w-full" icon={Search} value={currentRefinement} placeholder="Search Users..." onChange={(event: { currentTarget: { value: any } }) => refine(event.currentTarget.value)} />;

export default SearchField;
