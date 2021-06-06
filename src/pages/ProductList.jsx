
import { Icon, Menu, Table } from 'semantic-ui-react'
import React,{useState,useEffect} from "react"
import ProductService from '../Services/productService';

export default function ProductList() {

const [products, setProducts] = useState([])


useEffect(()=>{
    let productService= new ProductService()
    productService.getProducts().then(result=>setProducts(result.data.data))     
})

  return (
    <div>
        
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>password</Table.HeaderCell>
            
            <Table.HeaderCell>CreatedOne</Table.HeaderCell>
            <Table.HeaderCell>companyName</Table.HeaderCell>
            <Table.HeaderCell>phoneNumber</Table.HeaderCell>
            <Table.HeaderCell>webAddress</Table.HeaderCell>
           
          
          </Table.Row>
        </Table.Header>

        <Table.Body>
      
      
              {products.map((products)=>
              (
                <Table.Row key={products.id}>
                <Table.Cell>{products.email }</Table.Cell>
                <Table.Cell>{products.password}</Table.Cell>
              
                <Table.Cell>{products.createdOn}</Table.Cell>
                <Table.Cell>{products.companyName}</Table.Cell>
                <Table.Cell>{products.phoneNumber}</Table.Cell>
                <Table.Cell>{products.webAddress}</Table.Cell>
             
               
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
