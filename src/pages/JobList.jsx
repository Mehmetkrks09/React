import React from 'react'
import JobService from '../Services/jobService';

export default function JobList() {
    const [jobs, setJob] = useState([])


    useEffect(()=>{
       let jobService = new JobService()
       jobService.getJobs.then(result=>setJob(result.data.data))     
    })
    
      return (
        <div>
 
          <Table celled>
            <Table.Header>
              <Table.Row>
            
                <Table.HeaderCell>Job Name</Table.HeaderCell>
               
              
              </Table.Row>
            </Table.Header>
    
            <Table.Body>
          
          
                  {employers.map((jobs)=>
                  (
                    <Table.Row key={employers.id}>
                    <Table.Cell>{employers.jobName }</Table.Cell>
                    
                 
                   
                  </Table.Row>
    
    
                  ))
              }
            
            </Table.Body>
    
            <Table.Footer>
              <Table.Row>
                <Table.HeaderCell colSpan="3">
                  <Menu floated="right" pagination>
                    <Menu.Item as="a" icon>
                      <Icon name="chevron left" />
                    </Menu.Item>
                    <Menu.Item as="a">1</Menu.Item>
                    <Menu.Item as="a">2</Menu.Item>
                    <Menu.Item as="a">3</Menu.Item>
                    <Menu.Item as="a">4</Menu.Item>
                    <Menu.Item as="a" icon>
                      <Icon name="chevron right" />
                    </Menu.Item>
                  </Menu>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Footer>
          </Table>
        </div>
      );
}
