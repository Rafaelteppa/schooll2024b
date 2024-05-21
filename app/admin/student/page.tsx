import ListStudent from "./List";
import NewStudent from "./New";

export default function Student(){
    return(
        <div className="w-full flex flex-col justify-center mt-6">
            <div className="flex justify-center">
              <NewStudent/>
      </div>
      <ListStudent/>
        </div>

    );
}