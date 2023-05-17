
import { FooterCopyright } from './FooterCopyright';
import { FooterIconList } from './FooterIconList';


const CenteredFooter = (props) => (
  <div className="text-center relative bg-black bg-opacity-80 pt-10">
    {props.logo}

    <nav>
      <ul className="navbar mt-5 flex flex-row justify-center font-medium text-xl text-gray-800">
        {props.children}
      </ul>
    </nav>
    <FooterCopyright />
    <div className="mt-8 flex justify-center">
      <FooterIconList>{props.iconList}</FooterIconList>
    </div>
    <style jsx>
      {`
        .navbar :global(li) {
          @apply mx-4;
        }
      `}
    </style>
  </div>
);

export { CenteredFooter };
