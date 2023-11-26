import { HttpException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { CustomerDto } from './dto/customer.dto';
import { SaleDto } from './dto/sale.dto';
import { RolDto } from './rol.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class SaleMicroserviceService {
  constructor(
    private readonly configService: ConfigService,
  ) {}

  async getAllCustomers() {
    try {
      const costumers = await axios.get(`${this.configService.get('SALE_MICROSERVICE_URL')}/customer`);
      
      return costumers.data;
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status); 
    }
  }

  async getCustomerById(id: number) {
    try {
      const customer = await axios.get(`${this.configService.get('SALE_MICROSERVICE_URL')}/customer/${id}`);
      
      return customer.data;
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status); 
    }
  }

  async createCustomer(costumer: CustomerDto) {
    try {
      const newCustomer = await axios.post(`${this.configService.get('SALE_MICROSERVICE_URL')}/customer`, costumer);
      
      return newCustomer.data;
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status); 
    }
  }

  async getAllSales() {
    try {
      const sales = await axios.get(`${this.configService.get('SALE_MICROSERVICE_URL')}/sales`);
      
      return sales.data;
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status); 
    }
  }

  async getSaleById(id: number) {
    try {
      const sale = await axios.get(`${this.configService.get('SALE_MICROSERVICE_URL')}/sales/${id}`);
      
      return sale.data;
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status); 
    }
  }

  async createSale(sale: SaleDto) {
    try {
      const newSale = await axios.post(`${this.configService.get('SALE_MICROSERVICE_URL')}/sales/register`, sale);
      
      return newSale.data;
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status); 
    }
  }

  async getVolumen(dateStart: Date, dateEnd: Date) {
    try {
      const requestBody = {
        dateStart: dateStart.toISOString(),
        dateEnd: dateEnd.toISOString(),
      };

      const volumen = await axios.post(
        `${this.configService.get('SALE_MICROSERVICE_URL')}/sales/volumen`,
        requestBody
      );
      
      return volumen.data;
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status); 
    }
  }

  async getBestSellersProducts() {
    try {
      const bestSellersProducts = await axios.post(
        `${this.configService.get('SALE_MICROSERVICE_URL')}/sales/masvendidos`
      );
      
      return bestSellersProducts.data;
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status); 
    }
  }

  async getNewsletterRevenueOverTime(startYear: number): Promise<any[]> {
    try {
      const requestBody = {
        year: startYear,
      };

      const response = await axios.post(
        `${this.configService.get('SALE_MICROSERVICE_URL')}/sales/ingresosyears?year=${startYear}`
      );

      console.log('url', response)

      return response.data;
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status);
    }
  }

  async getLastSales() {
    try {
      const sales = await axios.post(`${this.configService.get('SALE_MICROSERVICE_URL')}/sales/ultimasventas`);
      
      return sales.data;
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status); 
    }
  }

  async getRoles() {
    try {
      const roles = await axios.get(`${this.configService.get('SALE_MICROSERVICE_URL')}/rol`);
      
      return roles.data;
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status); 
    }
  }

  async getRoleById(id: number) {
    try {
      const role = await axios.get(`${this.configService.get('SALE_MICROSERVICE_URL')}/rol/${id}`);
      
      return role.data;
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status); 
    }
  }

  async createRole(role: RolDto) {
    try {
      const newRole = await axios.post(`${this.configService.get('SALE_MICROSERVICE_URL')}/rol`, role);
      
      return newRole.data;
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status); 
    }
  }

  async updateRole(id: number, role: RolDto) {
    try {
      const updatedRole = await axios.patch(`${this.configService.get('SALE_MICROSERVICE_URL')}/rol/${id}`, role);
      
      return updatedRole.data;
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status); 
    }
  }

  async getAllUsers() {
    try {
      const users = await axios.get(`${this.configService.get('SALE_MICROSERVICE_URL')}/user`);
      
      return users.data;
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status); 
    }
  }

  async getUserById(id: number) {
    try {
      const user = await axios.get(`${this.configService.get('SALE_MICROSERVICE_URL')}/user/${id}`);
      
      return user.data;
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status); 
    }
  }

  async createUser(user: CreateUserDto) {
    try {
      const newUser = await axios.post(`${this.configService.get('SALE_MICROSERVICE_URL')}/user`, user);
      
      return newUser.data;
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status); 
    }
  }

  async updateUser(id: number, user: UpdateUserDto) {
    try {
      const updatedUser = await axios.patch(`${this.configService.get('SALE_MICROSERVICE_URL')}/user/${id}`, user);
      
      return updatedUser.data;
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status); 
    }
  }

  async singIn(user: any) {
    try {
      const singIn = await axios.post(`${this.configService.get('SALE_MICROSERVICE_URL')}/auth`, user);
      
      return singIn.data;
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status); 
    }
  }









  




}
