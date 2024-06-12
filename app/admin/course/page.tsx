import { Button } from "@/components/ui/button";
import Listcourse from "./List";
import Newcourse from "./New";

export default function course(){
    return(
        <div className="w-full flex flex-col justify-center mt-6">
            <div className="flex justify-center mb-6">
              <a href="/admin/course/new">
                <Button> Cadastrar Curso</Button>
              </a>
              
      </div>
      <Listcourse/>
        </div>

    )
}