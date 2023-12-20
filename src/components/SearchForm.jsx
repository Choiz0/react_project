import { Form, useNavigation } from "react-router-dom";

const SearchForm = ({ searchTerm }) => {
  const navigation = useNavigation();
  const isSubmit = navigation.state === "submitting";
  return (
    <div>
      <Form className="form">
        <input
          type="search"
          name="search"
          placeholder="search"
          disabled={isSubmit}
          required
        />
        <button className="btn" type="submit">
          {isSubmit ? "searching..." : "search"}
        </button>
      </Form>
    </div>
  );
};

export default SearchForm;
