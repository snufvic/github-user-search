function About() {
  return (
    <div>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search GitHub profiles and see profile details.
      </p>
      <div className="mx-6">
        <ul className="list-disc">
          <li className="text-lg text-gray-400">
            Designed with Tailwind CSS & DaisyUI.
          </li>
          <li className="text-lg text-gray-400">
            Data collected from github API.
          </li>
          <li className="text-lg text-gray-400 mb-4">
            Other techs include: Router-Dom, Context - Reducers and useReducer
          </li>
          <li className="text-lg text-gray-400">
            Version <span className="text-white">1.0.0</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
