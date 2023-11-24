import { HttpException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';
import { SupplierDto } from './dto/supplier.dto';
import { OrderDto } from './dto/order.dto';

@Injectable()
export class OrderMicroserviceService {
  constructor(
    private readonly ConfigService: ConfigService,
  ) {}

  async getAllSuppliers() {
    try {
      const suppliers = await axios.get(`${this.ConfigService.get('ORDER_MICROSERVICE_URL')}/suppliers`);
      
      return suppliers.data;
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status); 
    }
  }

  async getSupplierById(id: number) {
    try {
      const supplier = await axios.get(`${this.ConfigService.get('ORDER_MICROSERVICE_URL')}/suppliers/${id}`);
      
      return supplier.data;
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status); 
    }
  }

  async createSupplier(supplier: SupplierDto) {
    try {
      const newSupplier = await axios.post(`${this.ConfigService.get('ORDER_MICROSERVICE_URL')}/suppliers`, supplier);
      
      return newSupplier.data;
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status); 
    }
  }

  async updateSupplier(id: number, supplier: SupplierDto) {
    try {
      const updatedSupplier = await axios.put(`${this.ConfigService.get('ORDER_MICROSERVICE_URL')}/suppliers/${id}`, supplier);
      
      return updatedSupplier.data;
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status); 
    }
  }

  async deleteSupplier(id: number) {
    try {
      const deletedSupplier = await axios.delete(`${this.ConfigService.get('ORDER_MICROSERVICE_URL')}/suppliers/${id}`);
      
      return deletedSupplier.data;
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status); 
    }
  }

  async getAllOrders() {
    try {
      const orders = await axios.get(`${this.ConfigService.get('ORDER_MICROSERVICE_URL')}/orders`);
      
      return orders.data;
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status); 
    }
  }

  async getOrderById(id: number) {
    try {
      const order = await axios.get(`${this.ConfigService.get('ORDER_MICROSERVICE_URL')}/orders/${id}`);
      
      return order.data;
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status); 
    }
  }

  async createOrder(order: OrderDto) {
    try {
      const newOrder = await axios.post(`${this.ConfigService.get('ORDER_MICROSERVICE_URL')}/orders`, order);
      
      return newOrder.data;
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status); 
    }
  }

  async updateOrder(id: number, order: OrderDto) {
    try {
      const updatedOrder = await axios.put(`${this.ConfigService.get('ORDER_MICROSERVICE_URL')}/orders/${id}`, order);
      
      return updatedOrder.data;
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status); 
    }
  }

  async getSupplierDeliveryTimeAverage() {
    try {
      const ordersTimeline = await axios.get(`${this.ConfigService.get('ORDER_MICROSERVICE_URL')}/order/tiempo-ciclo-compra`);
      
      return ordersTimeline.data;
    } catch (error) {
      throw new HttpException(error.response.data, error.response.status); 
    }

  }
}
