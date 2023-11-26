import { Body, Controller, Get, Param, ParseIntPipe, Patch, Post, Query } from '@nestjs/common';
import { SaleMicroserviceService } from './sale-microservice.service';
import { CustomerDto } from './dto/customer.dto';
import { SaleDto } from './dto/sale.dto';
import { RolDto } from './rol.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SigninUserDto } from './dto/signin-user.dto';

@Controller('sale-microservice')
export class SaleMicroserviceController {
  constructor(private readonly saleMicroserviceService: SaleMicroserviceService) {}

  @Get('customers')
  getAllCustomers() {
    return this.saleMicroserviceService.getAllCustomers();
  }

  @Get('customers/:id')
  getCustomerById(@Param('id', ParseIntPipe) id: number) {
    return this.saleMicroserviceService.getCustomerById(id);
  }

  @Post('customers')
  createCustomer(@Body() customer: CustomerDto) {
    return this.saleMicroserviceService.createCustomer(customer);
  }

  @Get('sales')
  getAllSales() {
    return this.saleMicroserviceService.getAllSales();
  }

  @Get('sales/:id')
  getSaleById(@Param('id', ParseIntPipe) id: number) {
    return this.saleMicroserviceService.getSaleById(id);
  }

  @Post('sales')
  createSale(@Body() sale: SaleDto) {
    return this.saleMicroserviceService.createSale(sale);
  }

  @Post('/volumen')
  getVolumen(@Query('dateStart') dateStart: Date, @Query('dateEnd') dateEnd: Date) {
    return this.saleMicroserviceService.getVolumen(dateStart, dateEnd);
  }

  @Get('/sales/best-seller')
  getBestSellersProducts() {
    return this.saleMicroserviceService.getBestSellersProducts();
  }

  @Post('/sales/income-per-year')
  getNewsletterRevenueOverTime(@Query('year') startYear: number) {
    return this.saleMicroserviceService.getNewsletterRevenueOverTime(startYear);
  }

  @Get('/last-sales')
  getLastSales() {
    return this.saleMicroserviceService.getLastSales();
  }

  @Get('roles')
  async getRoles() {
    return this.saleMicroserviceService.getRoles();
  }

  @Get('roles/:id')
  async getRoleById(@Param('id', ParseIntPipe) id: number) {
    return this.saleMicroserviceService.getRoleById(id);
  }

  @Post('roles')
  async createRole(@Body() role: RolDto) {
    return this.saleMicroserviceService.createRole(role);
  }

  @Patch('roles/:id')
  async updateRole(@Param('id', ParseIntPipe) id: number, @Body() role: RolDto) {
    return this.saleMicroserviceService.updateRole(id, role);
  }

  @Get('users')
  async getAllUsers() {
    return this.saleMicroserviceService.getAllUsers();
  }

  @Get('users/:id')
  async getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.saleMicroserviceService.getUserById(id);
  }

  @Post('users')
  async createUser(@Body() user: CreateUserDto) {
    return this.saleMicroserviceService.createUser(user);
  }

  @Patch('users/:id')
  async updateUser(@Param('id', ParseIntPipe) id: number, @Body() user: UpdateUserDto) {
    return this.saleMicroserviceService.updateUser(id, user);
  }

  @Post('users/singIn')
  async singIn(@Body() user: SigninUserDto) {
    return this.saleMicroserviceService.singIn(user);
  }
}
