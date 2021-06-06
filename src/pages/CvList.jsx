import React from 'react'
import CvService from '../Services/cvService'

export default function CvList() {
    const [cvs, setCv] = useState([])


    useEffect(()=>{
        let cvService = new CvService()
        cvService.getJobSeekerId().then(result=>setCv(result.data.data))     
    })
    
    
      return (
        <div>
 
          <Table celled>
            <Table.Header>
              <Table.Row>
              <Table.HeaderCell>firstName</Table.HeaderCell>
                <Table.HeaderCell>lastName</Table.HeaderCell>
                <Table.HeaderCell>school</Table.HeaderCell>
                <Table.HeaderCell>jobExperience</Table.HeaderCell>
                
                <Table.HeaderCell>foreignLanguage</Table.HeaderCell>
                <Table.HeaderCell>nationalityId</Table.HeaderCell>
               
               
              
              </Table.Row>
            </Table.Header>
    
            <Table.Body>
          
          
                  {employers.map((cvs)=>
                  (
                    <Table.Row key={cvs.firstName}>
                    <Table.Cell>{cvs.lastName }</Table.Cell>
                    <Table.Cell>{cvs.school.schoolName}</Table.Cell>
                  
                    <Table.Cell>{cvs.jobExperience.jobName}</Table.Cell>
                    <Table.Cell>{cvs.foreignLanguage.languageName}</Table.Cell>
                    <Table.Cell>{cvs.nationalityId}</Table.Cell>
                    
                 
                   
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

